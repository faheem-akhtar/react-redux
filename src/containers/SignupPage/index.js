import React, { Component } from 'react'

import Header from '@/components/Header'
import SignupForm from '@/components/Signup/form'

class SignupPage extends Component {
  submit (values) {
    console.log(values)
  }
  render () {
    return (
      <div>
        <Header />
        <h2>Register an account with us</h2>
        <SignupForm onSubmit={this.submit} />
      </div>
    )
  }
}

export default SignupPage
