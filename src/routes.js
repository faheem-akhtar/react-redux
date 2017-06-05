import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '@/containers/HomePage'
import LoginPage from '@/containers/LoginPage'
import SignupPage from '@/containers/SignupPage'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
)
