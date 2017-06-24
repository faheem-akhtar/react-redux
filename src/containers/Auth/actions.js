import * as firebase from 'firebase'

import { SIGN_IN, SIGN_OUT } from '@/store/action-types'

const uidStorageKey = 'MEM_UID'

export const signInUser = ({ email, password }) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(e => {
        console.log(e.message)
      })
  }
}

export const signOutUser = () => () => firebase.auth().signOut()

export const signUpUser = ({ email, password, name }) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (!user) {
          return
        }
        user.updateProfile({
          displayName: name
        }).then(() => {
          return { ...user, displayName: name }
        })
        return user
      })
  }
}

export const fetchSignInUser = () => {
  return dispatch => {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(uidStorageKey, user.uid)
        dispatch({
          type: SIGN_IN,
          payload: user
        })
      } else {
        window.localStorage.removeItem(uidStorageKey)
        dispatch({
          type: SIGN_OUT
        })
      }
    })
  }
}

export const util = {
  isAuthenticated (auth) {
    const currentUser = auth ? auth.user : firebase.auth().currentUser
    return !!currentUser || !!localStorage.getItem(uidStorageKey)
  }
}

// export const fetchUsers = () => {
//   const usersRef = firebase.database().ref('test')
//   return dispatch => {
//     usersRef.on('value', snap => {
//       dispatch({
//         type: 'FETCH_USERS',
//         payload: snap.val()
//       })
//     })
//   }
// }
