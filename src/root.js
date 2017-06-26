import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { fetchSignInUser } from '@/components/Auth/actions'
import App from './App'
import * as theme from './theme'
import './global-styles'

class Root extends Component {
  static propTypes = {
    store: PropTypes.object,
    fetchSignInUser: PropTypes.func
  }
  componentWillMount () {
    this.props.fetchSignInUser()
  }
  render () {
    const { store } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSignInUser: () => {
    dispatch(fetchSignInUser())
  }
})

export default connect(null, mapDispatchToProps)(Root)
