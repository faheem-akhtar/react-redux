import React from 'react'
import { render } from 'react-dom'

import configureStore from './store'
import Root from './root'

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
