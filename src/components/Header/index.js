import React from 'react'
import { Link } from 'react-router-dom'

import Button from '@/components/core/Button'

export default () => (
  <header>
    <h1>React Redux Boilerplate</h1>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><a href='#'>Register</a></li>
      </ul>
    </nav>
    <br />
    <Button>Click me!</Button>
  </header>
)
