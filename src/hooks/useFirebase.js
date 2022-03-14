import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  getIdToken,
  signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeFirebase from '../Screens/Login/Login/firebase/firebase.init'
import axios from 'axios'
import { async } from '@firebase/util'

initializeFirebase()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userError, setUserError] = useState('')
  const [token, setToken] = useState('')
  const auth = getAuth()

  // google auth
  const googleAuthProvider = new GoogleAuthProvider()

  // check user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        setUser(user)
        getIdToken(user)
        .then(idToken => {
          
          setToken(idToken)
          localStorage.setItem('token', idToken)

        })
      } else {
        setUser({})
      }
      setLoading(false)
    })
    return () => unsubscribe
  }, [])

  useEffect(() => {
    const getUser = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.get(
        `http://localhost:5000/api/users/${user.email}`,
        user,
        config
      )
      setAdmin(data.admin)
    }
    getUser()
  }, [user.email])

  

  // save user to db

  const saveUserToDb = async (email, displayName, methodType) => {
    const user = { email, displayName }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    if (methodType.toLowerCase() === 'post') {
      const { data } = await axios.post(
        'http://localhost:5000/api/users',
        {
          email,
          displayName,
        },
        config
      )
    }

    if (methodType.toLowerCase() === 'put') {
      const { data } = await axios.put(
        'http://localhost:5000/api/users',
        {
          email,
          displayName,
        },
        config
      )
    }
  }

  // signup user
  const registerUser = (email, password, name, history) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        setUserError('')

        const createdUser = { email, displayName: name }
        setUser(createdUser)

        // save user to db
        saveUserToDb(email, name, 'POST')

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

        saveUserToDb(user.email, user.displayName, 'PUT')
        setUserError('')
        const destination = location?.state?.from || '/'
        history.replace(destination)
      })
      .catch((error) => {
        const errorMessage = error.message

        setUserError(errorMessage)
      })
      .finally(() => setLoading(false))
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
    admin,
    loading,
    token,
    userError,
    googleSignIn,
    registerUser,
    loginUser,
    logout,
  }
}

export default useFirebase
