import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class AuthHeader extends Component {
  renderJoinLogin () {
    return <Link to="/signup">Join</Link>
  }
  render () {
    return (
      <header>
        <nav>
          {this.renderJoinLogin()}
        </nav>
      </header>
    )
  }
}
