import { SNACKBAR_SET, SNACKBAR_DISMISS } from '@/store/action-types'

const initialState = []

const snackbar = (state, action) => {
  switch (action.type) {
    case SNACKBAR_SET:
      return {
        id: action.id,
        msg: action.msg
      }
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
      return state
  }
  return state
}

export default snackbars
