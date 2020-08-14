import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { LoginButton } from './LoginButton.js'
import { UsernameInput } from './UsernameInput.js'
import { ErrorTypes } from '../Constants/ErrorTypes.js'
import { ErrorMessage } from './ErrorMessage.js'
import '../Stylesheets/styles.css'

export const LoginPage = ({ LoginHandler }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // TODO Redux - Login state
  const [username, setUsername] = useState('')

  const [retriedAfterSubmitRejection, setRetried] = useState(true)
  const [isValidated, setIsValidated] = useState(false)
  const [errorType, setErrorType] = useState(ErrorTypes.NONE)

  function validateUsername (username) {
    // eslint-disable-next-line no-undef
    return fetch('https://yesno.wtf/api', {
      method: 'GET',
      headers: { Accept: 'application/json' }
    })
      .then(res => res.json())
      .then(response => {
        return (response.answer === 'yes')
      })
  }

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('isLoggedIn') === 'true')
    setUsername(window.localStorage.getItem('username'))
  }, [])

  useEffect(() => {
    if (username === '') {
      setErrorType(ErrorTypes.EmptyUsername)
    } else if (username.length > 16) {
      setErrorType(ErrorTypes.LongUsername)
    } else {
      setErrorType(ErrorTypes.NONE)
    }
    setRetried(true)
  }, [username])

  const handleSubmit = (e) => {
    e.preventDefault()
    setRetried(false)
    if ([ErrorTypes.EmptyUsername, ErrorTypes.LongUsername].includes(errorType)) {
      return
    }
    validateUsername(username)
      .then(isValid => {
        setIsValidated(isValid)
        if (isValid) {
          LoginHandler(username)
        } else {
          setErrorType(ErrorTypes.Validation)
        }
      })
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value.trim())
  }

  if (isLoggedIn) {
    return <Redirect to="/listing" />
  }

  return (
    <div id="login-container">
      <h1 id="login-title">Log in</h1>
      <form
        id="login-form"
        onSubmit={handleSubmit}
      >
        <UsernameInput onChange={handleInputChange} />
        <LoginButton />
      </form>
      <ErrorMessage disabled={retriedAfterSubmitRejection || isValidated} type={errorType} />
    </div>
  )
}

LoginPage.propTypes = {
  LoginHandler: PropTypes.func
}
