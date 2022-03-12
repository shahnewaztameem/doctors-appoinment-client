import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
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

  // google auth
  const googleAuthProvider = new GoogleAuthProvider()

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
  const registerUser = (email, password, name, history) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUserError('')

        const createdUser = { email, displayName: name }
        setUser(createdUser)

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          })

        history.replace('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(errorCode, errorMessage)
        setUserError(errorMessage)
      })
      .finally(() => setLoading(false))
  }

  // login with google
  const googleSignIn = (location, history) => {
    setLoading(true)

    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        setUserError('')
      })
      .catch((error) => {
        const errorMessage = error.message

        setUserError(errorMessage)
      })
      .finally(() => setLoading(false))
      history.replace('/')
  }

  // login user
  const loginUser = (email, password, location, history) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        history.replace(destination)

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
    googleSignIn,
    registerUser,
    loginUser,
    logout,
  }
}

export default useFirebase
