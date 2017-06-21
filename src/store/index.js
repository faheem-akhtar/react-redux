import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { firebaseStateReducer } from 'react-redux-firebase'

import config from '../../config'
import auth from '@/containers/Auth/reducers'
import snackbar from '@/containers/Snackbar/reducers'

const rootReducer = combineReducers({
  auth,
  snackbar,
  form: formReducer,
  firebase: firebaseStateReducer
})

export default () => {
  const middlewares = [thunk]

  const store = createStore(
    rootReducer,
    config.isProd ? {} : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  )
  return store
}
