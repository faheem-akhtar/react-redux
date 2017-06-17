import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Input } from '@/components/core/Form/Fields'
import FieldWrapper from '@/components/core/Wrappers/Field'
import ValidationMessage from '@/components/Validation/Message'

export default class RenderInput extends Component {
  static propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object,
    border: PropTypes.bool
  }
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
        <Input {...input} id={input.name} type={type} error={touched && error} {...rest} />
        {this.renderError()}
      </FieldWrapper>
    )
  }
}
