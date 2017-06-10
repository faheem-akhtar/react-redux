import React from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'

import Button from '@/components/core/Button'
import renderInput from '@/components/Fields/input'
import * as validation from '@/components/Validation'

let SignupForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field label="Full Name" name="name" component={renderInput} type="text" validate={[validation.required]} />
      <Field label="Email" name="email" component={renderInput} type="email" validate={[validation.required, validation.email]} />
      <Field label="Password" name="password" component={renderInput} type="password" validate={[validation.required]} />
      <div>
        <Button disabled={pristine || submitting}>Signup</Button>
      </div>
    </form>
  )
}

SignupForm.propTypes = { ...propTypes }

export default reduxForm({
  form: 'SignupForm'
})(SignupForm)
