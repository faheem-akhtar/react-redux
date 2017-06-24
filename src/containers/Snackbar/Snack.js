import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { CSSTransitionGroup } from 'react-transition-group'

import { removeMessage } from './actions'

const SnackbarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
`
const Snack = styled.div`
  max-width: 568px;
  min-width: 288px;
  padding: 14px 24px;
  display: flex;
  justify-content: space-between;
  background-color: #323232;
  color: #fff;
  box-shadow: 0 -3px 6px 0 rgba(0,0,0,0.11);
`
const Msg = styled.div`
  font-size: ${14 / 16}em;
`
const A = styled.a`
  font-size: ${14 / 16}em;
  text-transform: uppercase;
  text-decoration: none;
  color: #64dd17;
`

class Message extends Component {
  constructor (props) {
    super(props)
    this.dismiss = this.dismiss.bind(this)
  }
  componentWillMount () {
    this.startTimer(this.props)
  }
  componentWillUnmount () {
    clearTimeout(this.dismissTimeout)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.message.id !== this.props.message.id) {
      this.startTimer(nextProps)
    }
  }
  startTimer (props) {
    const { message, onDismiss } = props
    this.dismissTimeout = setTimeout(() => {
      onDismiss(message.id)
    }, message.time)
  }
  dismiss (event) {
    const { message, onDismiss } = this.props
    event.preventDefault()
    onDismiss(message.id)
  }
  render () {
    const { message } = this.props
    if (!message) {
      return null
    }
    return (
      <Snack>
        <Msg>{message.msg}</Msg>
        <A href="#" onClick={this.dismiss}>Close</A>
      </Snack>
    )
  }
}

class Snackbar extends Component {
  constructor (props) {
    super(props)
    this.onDismiss = this.onDismiss.bind(this)
  }
  onDismiss (id) {
    this.props.removeMessage(id)
  }
  render () {
    const { messages } = this.props
    let msg = ''
    if (messages.length) {
      msg = <Message message={messages[0]} onDismiss={this.onDismiss} key={messages[0].id} />
    }
    return (
      <SnackbarWrapper>
        <CSSTransitionGroup
          transitionName="slideUp"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={300}
          transitionAppear
          transitionAppearTimeout={800}
          >
          {msg}
        </CSSTransitionGroup>
      </SnackbarWrapper>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.snackbar
})

export default connect(mapStateToProps, { removeMessage })(Snackbar)
