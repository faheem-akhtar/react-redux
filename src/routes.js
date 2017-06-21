import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProtectedRoute from '@/containers/Auth/protected'

import HomePage from '@/containers/HomePage'
import AuthLayout from '@/containers/Layouts/Auth'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={() => <AuthLayout page="login" />} />
      <Route path="/signup" render={() => <AuthLayout page="join" />} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
)
