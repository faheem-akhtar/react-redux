import React from 'react'
import PropTypes from 'prop-types'

let renderInput = ({input, label, type, meta: {touched, error, warning}}) => {
  const errorClass = touched && error ? 'error' : ''
  return (
    <div className={errorClass}>
      <label htmlFor={input.name}>{label}</label>
      <div>
        <input {...input} id={input.name} type={type} />
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
