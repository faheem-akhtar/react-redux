import * as firebase from 'firebase'

import { SIGN_IN, SIGN_OUT } from '@/store/action-types'

export const signInUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(e => {
        console.log(e.message)
      })
  }
}

export const fetchSignInUser = () => {
  return dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({
          type: SIGN_IN,
          payload: user
        })
      } else {
        dispatch({
          type: SIGN_OUT
        })
      }
    })
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
