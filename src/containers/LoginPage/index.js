import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from '@/components/Header'
import LoginForm from '@/components/Login/form'
import { signInUser } from '@/containers/Auth/actions'

class LoginPage extends Component {
  static propTypes = {
    auth: PropTypes.object,
    signIn: PropTypes.func
  }
  constructor () {
    super()
    this.submit = this.submit.bind(this)
  }
  submit (values) {
    this.props.signIn(values)
  }
  render () {
    const { users } = this.props.auth
    return (
      <div>
        <Header />
        <h2>Login</h2>
        <LoginForm onSubmit={this.submit} />
        {JSON.stringify(users)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
  signIn: values => dispatch(signInUser(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
