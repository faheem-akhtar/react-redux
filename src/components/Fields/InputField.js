import React, { Component } from 'react'
import styled from 'styled-components'

import FieldWrapper from '@/components/Wrappers/Field'
import ValidationMessage from '@/components/Validation/Message'

const InputField = styled.input`
  padding: 0.4em 0.5em;
  border: 1px solid transparent;
  background: none;
  text-align: inherit;
  margin-bottom: .5em;
  font-family: inherit;
  font-size: ${30 / 16}em;
  width: 100%;
  color: ${props => props.theme.colors.primary()};
  ${props => props.error && `
    border-color: ${props.theme.colors.error()};
  `}
`

export default class RenderInput extends Component {
  renderLabel () {
    const { input, label } = this.props
    if (label) {
      return
    }

    return <label htmlFor={input.name}>{label}</label>
  }
  renderError () {
    const { meta: { touched, error, warning } } = this.props

    if (touched && error) {
      return <ValidationMessage>{ error }</ValidationMessage>
    }
    if (touched && warning) {
      return <ValidationMessage>{ warning }</ValidationMessage>
    }
  }
  render () {
    const {input, type, meta: {touched, error}, border, ...rest} = this.props
    return (
      <FieldWrapper border={border}>
        {this.renderLabel()}
        <InputField {...input} id={input.name} type={type} error={touched && error} {...rest} />
        {this.renderError()}
      </FieldWrapper>
    )
  }
}
