import React from 'react'
import { Redirect } from 'react-router-dom'

import { LoginButton } from './LoginButton'
import { ErrorMessage } from 'components/common/ErrorMessage/ErrorMessage'
import { useLoginForm } from './useLoginForm'
import { ErrorTypes } from 'constants/ErrorTypes'

import styles from './LoginForm.module.scss'

export const LoginForm = () => {
  const { handleInputChange, isLoggedIn, onSubmit, loading, errorType, register, handleSubmit, errors } = useLoginForm()

  if (isLoggedIn) return <Redirect to="/listing" />

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>Log in</h1>
      {loading && <p>Verifying username...</p>}
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleInputChange}
          ref={register({ required: true, maxLength: 16 })}
          className={styles.usernameInput}
        />
        <LoginButton />
      </form>
      {errors.username && errors.username.type === 'required' && (<ErrorMessage show type={ErrorTypes.EmptyUsername} />)}
      {errors.username && errors.username.type === 'maxLength' && (<ErrorMessage show type={ErrorTypes.LongUsername} />)}
      {errorType !== ErrorTypes.None && (<ErrorMessage show type={errorType} />)}
    </div>
  )
}
