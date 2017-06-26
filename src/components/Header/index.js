import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOutUser, util } from '@/components/Auth/actions'

class Header extends Component {
  constructor () {
    super()
    this.logoutClickHandler = this.logoutClickHandler.bind(this)
  }
  renderLoginNav () {
    const { auth } = this.props
    if (util.isAuthenticated(auth)) {
      return <li><a href="#" onClick={this.logoutClickHandler}>Logout</a></li>
    } else {
      return <li><Link to="/login">Login</Link></li>
    }
  }
  renderRegisterNav () {
    const { auth } = this.props
    if (!util.isAuthenticated(auth)) {
      return <li><Link to="/signup">Register</Link></li>
    } else {
      return ''
    }
  }
  logoutClickHandler (event) {
    event.preventDefault()
    this.props.signOutUser()
  }
  render () {
    return (
      <header>
        <h1>React Redux Boilerplate</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            {this.renderRegisterNav()}
            {this.renderLoginNav()}
          </ul>
        </nav>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { signOutUser })(Header)
