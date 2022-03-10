import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeFirebase from '../Screens/Login/Login/firebase/firebase.init'

initializeFirebase()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [userError, setUserError] = useState('')

  const auth = getAuth()

  // check user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setUser(user)
      } else {
        setUser({})
      }
      setLoading(false)
    })
    return () => unsubscribe
  }, [])

  // signup user
  const registerUser = (email, password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user
        setUserError('')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(errorCode, errorMessage)
        setUserError(errorMessage)
      })
      .finally(() => setLoading(false))
  }

  // login user
  const loginUser = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUserError('')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(errorCode, errorMessage)
        setUserError(errorMessage)
      })
      .finally(() => setLoading(false))
  }

  const logout = () => {
    setLoading(true)
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error(error)
      })
      .finally(() => setLoading(false))
  }

  return {
    user,
    loading,
    userError,
    registerUser,
    loginUser,
    logout,
  }
}

export default useFirebase
