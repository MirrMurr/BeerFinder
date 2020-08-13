import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import '../Stylesheets/styles.css'

const LoginButton = () => {
  return (
    <div id="login-button-container">
      <button
        id="login-button"
        type="submit"
      >Log in
      </button>
    </div>
  )
}

const UsernameInput = ({ onChange }) => {
  return (
    <input
      id="usernameInput"
      type="text"
      placeholder="Username"
      onChange={onChange}
    />
  )
}

UsernameInput.propTypes = {
  onChange: PropTypes.func
}

const ValidationError = ({ show, error }) => {
  return (
    show ? null
      : (<div className="error" id="validationError">
        {error}
      </div>
      )
  )
}

ValidationError.propTypes = {
  show: PropTypes.bool,
  error: PropTypes.string
}

export const LoginForm = ({ LoginHandler }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [firstLoad, setFirstLoad] = useState(true)
  const [isValidated, setIsValidated] = useState(false)
  const [usernameError, setusernameError] = useState(null)
  const validationError = 'Your username has not been found eligible.'

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
      setusernameError('Username field must not be empty!')
    } else if (username.length > 16) {
      setusernameError('Max. 16 characters.')
    } else {
      setusernameError(null)
    }
    setFirstLoad(true)
  }, [username])

  function handleSubmit (e) {
    e.preventDefault()
    if (usernameError) {
      setFirstLoad(false)
      return
    }
    validateUsername(username)
      .then(isValid => {
        // console.log(isValid)
        setFirstLoad(false)
        setIsValidated(isValid)
        if (isValid) {
          LoginHandler(username)
        }
      })
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value.trim())
  }

  if (isLoggedIn) {
    return <Redirect to="/listing" />
  }

  if (usernameError) {
    const el = document.getElementById(usernameError)
    if (el) {
      el.style.display = 'block'
    }
  }

  return (
    <div id="login-container">
      <h1 id="login-title">Login</h1>
      <form
        id="login-form"
        onSubmit={handleSubmit}
      >
        <UsernameInput onChange={handleInputChange} />
        <LoginButton />
      </form>
      <ValidationError show={Boolean(firstLoad || isValidated || usernameError)} error={validationError} />
      <div className="error" id="usernameError">{firstLoad || usernameError}</div>
    </div>
  )
}

LoginForm.propTypes = {
  LoginHandler: PropTypes.func
}
