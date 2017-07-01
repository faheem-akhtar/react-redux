import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Header from '@/components/Header'

const H1 = styled.h2`
  color: #000;
  text-align: center;
  padding: 0 1em;
`

class HomePage extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <Header />
        <H1>Welcome {user.displayName}</H1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(HomePage)
