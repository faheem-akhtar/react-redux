import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProtectedRoute from '@/components/Auth/ProtectedRoute'

import HomePage from '@/components/Layouts/Home'
import AuthLayout from '@/components/Layouts/AuthLayout'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" render={() => <AuthLayout page="login" />} />
      <Route path="/signup" render={() => <AuthLayout page="join" />} />
      <ProtectedRoute path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
)
