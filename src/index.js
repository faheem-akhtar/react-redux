import React from 'react'
import { render } from 'react-dom'
import * as firebase from 'firebase'

import configureStore from './store'
import Root from './root'
import { config as firebaseConfig } from '../config/firebase'
import 'sanitize.css/sanitize.css'

firebase.initializeApp(firebaseConfig)

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./root.js', () => {
    const NextRoot = require('./root.js').default
    render(<NextRoot store={store} />, document.getElementById('app'))
  })
}
