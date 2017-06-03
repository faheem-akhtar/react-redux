import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@/components/core/Button'

export default () => (
  <header>
    <h1>React Redux Boilerplate</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <a href="#">Register</a>
    </nav>
    <Button>Click me!</Button>
  </header>
)
