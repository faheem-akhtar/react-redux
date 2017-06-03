import React from 'react'
import { Provider } from 'react-redux'


import App from './containers/App'
import Routes from './routes'

export default ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider>
)
