import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Centered from '@/components/core/Wrappers/Centered'
import LoginForm from '@/components/Login/form'
import { signInUser } from '@/containers/Auth/actions'
import AuthHeader from '@/containers/Header/AuthHeader'

class LoginPage extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  static propTypes = {
    signInUser: PropTypes.func
  }
  static contextTypes = {
    router: PropTypes.object
  }
  submit (values) {
    this.props.signInUser(values).then(user => {
      // TODO: we need a better solution here
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
        <AuthHeader />
        <Centered darkBg>
          <LoginForm onSubmit={this.submit} />
        </Centered>
      </div>
    )
  }
}

export default connect(null, { signInUser })(LoginPage)
