import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { SimpleLink, SimpleAnchor } from '@/components/Button'
import { signOutUser, util } from '@/components/Auth/actions'

const Header = styled.header`
  background-color: #000;
  padding: 15px 10px;
`

const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
`

const LI = styled.li`
  margin: 0 .5em;
`

class HeaderComponent extends Component {
  constructor () {
    super()
    this.logoutClickHandler = this.logoutClickHandler.bind(this)
  }
  renderLoginNav () {
    const { auth } = this.props
    if (util.isAuthenticated(auth)) {
      return <LI><SimpleAnchor dark href="#" onClick={this.logoutClickHandler}>Logout</SimpleAnchor></LI>
    } else {
      return <LI><SimpleLink dark to="/login">Login</SimpleLink></LI>
    }
  }
  renderRegisterNav () {
    const { auth } = this.props
    if (!util.isAuthenticated(auth)) {
      return <LI><SimpleLink dark to="/signup">Register</SimpleLink></LI>
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
      <Header>
        <nav>
          <UL>
            <LI><SimpleLink dark to="/">Home</SimpleLink></LI>
            {this.renderRegisterNav()}
            {this.renderLoginNav()}
          </UL>
        </nav>
      </Header>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { signOutUser })(HeaderComponent)
