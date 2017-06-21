import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const SnackbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100;
  padding: 14px 24px;
  transform: translateX(-50%);
  background-color: #323232;
  color: #fff;
  box-shadow: 0 -3px 6px 0 rgba(0,0,0,0.11);
`
const Snack = styled.div`
  max-width: 568px;
  min-width: 288px;
  display: flex;
  justify-content: space-between;
`
const Msg = styled.div`
  font-size: ${14 / 16}em;
`
const A = styled.a`
  font-size: ${14 / 16}em;
  text-transform: uppercase;
  text-decoration: none;
`

class Snackbar extends Component {
  render () {
    const { messages } = this.props
    console.log(messages)
    return (
      <SnackbarWrapper>
        <Snack>
          <Msg>i am here</Msg>
          <A href="#">Close</A>
        </Snack>
      </SnackbarWrapper>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.snackbar
})

export default connect(mapStateToProps)(Snackbar)
