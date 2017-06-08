import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider, connect } from 'react-redux'

import { fetchSignInUser } from '@/containers/Auth/actions'
import Routes from './routes'

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
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSignInUser: () => {
    dispatch(fetchSignInUser())
  }
})

export default connect(null, mapDispatchToProps)(Root)
