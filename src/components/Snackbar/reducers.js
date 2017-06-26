import { SNACKBAR_SET, SNACKBAR_DISMISS } from '@/store/action-types'

const initialState = []

const snackbar = (state, action) => {
  switch (action.type) {
    case SNACKBAR_SET:
      return {
        id: action.id,
        msg: action.msg,
        time: action.time
      }
    case SNACKBAR_DISMISS:
      return state.id !== action.id
  }
  return state
}

const snackbars = (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_SET:
      return [
        ...state,
        snackbar(undefined, action)
      ]
    case SNACKBAR_DISMISS:
      return state.filter(snack =>
        snackbar(snack, action)
      )
  }
  return state
}

export default snackbars
