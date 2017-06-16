import React from 'react'
import PropTypes from 'prop-types'

import { Input } from '@/components/core/Form/Fields'

const renderLabel = (id, label) => {
  if (!label) {
    return
  }

  return <label htmlFor={id}>{label}</label>
}

let renderInput = ({input, label, type, meta: {touched, error, warning}}) => {
  const errorClass = touched && error ? 'error' : ''
  return (
    <div className={errorClass}>
      {renderLabel(input.name, label)}
      <div>
        <Input {...input} id={input.name} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
}

renderInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object
}

export default renderInput
