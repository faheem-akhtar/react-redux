import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '@/containers/Header'
import SignupForm from '@/components/Signup/form'
import { signUpUser } from '@/containers/Auth/actions'

class SignupPage extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  static propTypes = {
    signUpUser: PropTypes.func
  }
  static contextTypes = {
    router: PropTypes.object
  }
  submit (values) {
    this.props.signUpUser(values)
      .then(user => {
        if (!user) {
          return
        }
        setTimeout(() => {
          this.context.router.history.push('/')
        }, 500)
      })
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

export default connect(null, { signUpUser })(SignupPage)
