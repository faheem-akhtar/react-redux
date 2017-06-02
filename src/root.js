import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router'

import App from './containers/App'

export default ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)
