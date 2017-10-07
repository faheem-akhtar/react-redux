import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

import config from '../../config'

const rootReducer = combineReducers({
  form: formReducer
})

export default () => {
  const store = createStore(
    rootReducer,
    config.isProd ? {} : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
