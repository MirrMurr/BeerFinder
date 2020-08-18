import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { LoginButton } from '../Components/Login/LoginButton.js'
import { UsernameInput } from '../Components/Login/UsernameInput.js'
import { ErrorTypes } from '../Constants/ErrorTypes.js'
import { ErrorMessage } from '../Components/ErrorMessage.js'

import '../Stylesheets/styles.css'

export const LoginPage = ({ LoginHandler }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // TODO Login: Redux - isLoggedIn, username state
  const [username, setUsername] = useState('')

  const [loading, setLoading] = useState(false)
  const [retriedAfterSubmitRejection, setRetried] = useState(true)
  const [isValidated, setIsValidated] = useState(false)
  const [errorType, setErrorType] = useState(ErrorTypes.NONE)

  const validateUsername = async (username) => {
    setLoading(true)
    const response = await axios.get('https://yesno.wtf/api')
    setLoading(false)
    return response.data.answer === 'yes'
  }

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('isLoggedIn') === 'true')
    setUsername(window.localStorage.getItem('username'))
  }, [])

  useEffect(() => {
    if (username === null) return
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

  if (isLoggedIn) { return <Redirect to="/listing" /> }

  return (
    <div className="login-container">
      <h1 className="login-title">Log in</h1>
      <p>{loading ? 'Verifying username...' : null}</p>
      <form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <UsernameInput onChange={handleInputChange} />
        <LoginButton />
      </form>
      <ErrorMessage show={!retriedAfterSubmitRejection && !isValidated} type={errorType} />
    </div>
  )
}

LoginPage.propTypes = {
  LoginHandler: PropTypes.func
}
