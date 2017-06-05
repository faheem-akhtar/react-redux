import React from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'

import Button from '@/components/core/Button'
import renderInput from '@/components/Fields/input'
import * as validation from '@/components/Validation'

let LoginForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Field label="Email" name="email" component={renderInput} type="email" validate={[validation.required, validation.email]} />
      <Field label="Password" name="password" component={renderInput} type="password" validate={[validation.required]} />
      <div>
        <Button disabled={pristine || submitting}>Submit</Button>
      </div>
    </form>
  )
}

LoginForm.propTypes = { ...propTypes }

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)
