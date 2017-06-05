import React from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'

import Button from '@/components/core/Button'

let LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" id="password" />
      </div>
      <div>
        <Button>Submit</Button>
      </div>
    </form>
  )
}

LoginForm.propTypes = { ...propTypes }

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)
