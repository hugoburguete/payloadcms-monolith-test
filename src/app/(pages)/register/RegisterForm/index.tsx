'use client'

import React from 'react'

const RegisterForm: React.FC = () => {
  return (
    <form>
      <p>{`This is the form to register new users`}</p>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
    </form>
  )
}

export default RegisterForm
