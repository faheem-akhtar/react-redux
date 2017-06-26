import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Centered from '@/components/Wrappers/Centered'
import LoginForm from './LoginForm'
import { signInUser } from './actions'
import { setMessage } from '@/components/Snackbar/actions'

class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  static contextTypes = {
    router: PropTypes.object
  }
  submit (values) {
    const { signInUser, setMessage } = this.props
    signInUser(values).then(user => {
      // TODO: we need a better solution here
      if (!user) {
        return
      }
      setTimeout(() => {
        this.context.router.history.push('/')
      }, 500)
    })
    .catch(e => {
      console.log(e)
      setMessage(e.message || 'Something went wrong. Please try again')
    })
  }
  render () {
    return (
      <Centered darkBg>
        <LoginForm onSubmit={this.submit} />
      </Centered>
    )
  }
}

export default connect(null, { signInUser, setMessage })(LoginPage)
