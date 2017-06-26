import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { withTheme } from 'styled-components'

import FormWrapper from '@/components/Wrappers/Form'
import Button, { ButtonsWrapper } from '@/components/Button'
import RenderInput from '@/components/Fields/InputField'
import * as validation from '@/components/Validation'

const LoginForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <FormWrapper center small>
      <form onSubmit={handleSubmit} noValidate>
        <Field placeholder="email ..." name="email" component={RenderInput} type="email" border validate={[validation.required, validation.email]} />
        <Field placeholder="password ..." name="password" component={RenderInput} type="password" validate={[validation.required]} />
        <ButtonsWrapper>
          <Button disabled={pristine || submitting}>Login</Button>
        </ButtonsWrapper>
      </form>
    </FormWrapper>
  )
}

export default reduxForm({
  form: 'LoginForm'
})(withTheme(LoginForm))
