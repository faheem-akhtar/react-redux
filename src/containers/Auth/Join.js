import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Centered from '@/components/core/Wrappers/Centered'
import SignupForm from '@/components/Signup/form'
import { signUpUser } from '@/containers/Auth/actions'
import { setMessage } from '@/containers/Snackbar/actions'

class JoinPage extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  static contextTypes = {
    router: PropTypes.object
  }
  submit (values) {
    const { signUpUser, setMessage } = this.props
    signUpUser(values)
      .then(user => {
        if (!user) {
          return
        }
        setTimeout(() => {
          this.context.router.history.push('/')
        }, 500)
      })
      .catch(e => {
        setMessage(e.message || 'Something went wrong. Please try again')
      })
  }
  render () {
    return (
      <Centered darkBg>
        <SignupForm onSubmit={this.submit} />
      </Centered>
    )
  }
}

export default connect(null, { signUpUser, setMessage })(JoinPage)