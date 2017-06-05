import React from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'

import Button from '@/components/core/Button'

let SignupForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Full Name</label>
        <Field name="name" component="input" type="text" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="password" id="password" />
      </div>
      <div>
        <Button>Signup</Button>
      </div>
    </form>
  )
}

SignupForm.propTypes = { ...propTypes }

export default reduxForm({
  form: 'SignupForm'
})(SignupForm)
