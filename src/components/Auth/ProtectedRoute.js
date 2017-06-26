import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { util } from './actions'

class ProtectedRoute extends Component {
  render () {
    const { component: Component, auth, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
        util.isAuthenticated(auth) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname: '/login'
          }} />
        )
      )} />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(ProtectedRoute)
