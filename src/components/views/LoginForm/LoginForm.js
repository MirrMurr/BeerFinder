import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginButton } from 'components/views/LoginForm/LoginButton'
import { UsernameInput } from 'components/views/LoginForm/UsernameInput'
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage'
import { useLoginForm } from './useLoginForm'

export const LoginForm = () => {
  const { isLoggedIn, loading, onSubmit, handleInputChange, error, errorType } = useLoginForm()

  if (isLoggedIn) { return <Redirect to="/listing" /> }

  return (
    <div className="login-container">
      <h1 className="login-title">Log in</h1>
      <p>{loading ? 'Verifying username...' : null}</p>
      <form
        className="login-form"
        onSubmit={onSubmit}
      >
        <UsernameInput onChange={handleInputChange} />
        <LoginButton />
      </form>
      <ErrorMessage show={error} type={errorType} />
    </div>
  )
}
