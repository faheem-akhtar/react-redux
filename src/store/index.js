import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default () => {
  const store = createStore(
    rootReducer
  )

  return store
}
