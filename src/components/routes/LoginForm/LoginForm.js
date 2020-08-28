import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginButton } from './LoginButton'
import { UsernameInput } from './UsernameInput'
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage'
import { useLoginForm } from './useLoginForm'

import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const { isLoggedIn, loading, onSubmit, handleInputChange, error, errorType } = useLoginForm()

  if (isLoggedIn) return <Redirect to="/listing" />

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Log in</h1>
      <p>{loading ? 'Verifying username...' : null}</p>
      <form
        className={styles.loginForm}
        onSubmit={onSubmit}
      >
        <UsernameInput onChange={handleInputChange} />
        <LoginButton />
      </form>
      <ErrorMessage show={error} type={errorType} />
    </div>
  )
}
