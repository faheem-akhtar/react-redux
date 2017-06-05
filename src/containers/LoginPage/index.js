import React, { Component } from 'react'

import Header from '@/components/Header'
import LoginForm from '@/components/Login/form'

class LoginPage extends Component {
  submit (values) {
    console.log(values)
  }
  render () {
    return (
      <div>
        <Header />
        <h2>Login</h2>
        <LoginForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default LoginPage
