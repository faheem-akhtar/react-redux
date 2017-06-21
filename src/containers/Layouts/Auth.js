import React, { Component } from 'react'

import AuthHeader from '@/containers/Header/AuthHeader'
import LoginPage from '@/containers/Auth/Login'
import JoinPage from '@/containers/Auth/Join'

class AuthLayout extends Component {
  renderPage () {
    const { page } = this.props
    switch (page) {
      case 'join':
        return <JoinPage />
      case 'login':
      default:
        return <LoginPage />
    }
  }
  render () {
    const { page } = this.props
    return (
      <div>
        <AuthHeader page={page} />
        {this.renderPage()}
      </div>
    )
  }
}

export default AuthLayout
