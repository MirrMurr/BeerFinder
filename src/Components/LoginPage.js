import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

export const LoginPage = ({ LoginHandler }) => {
  const [username, setUsername] = useState('')
  const [firstLoad, setFirstLoad] = useState(true)
  const [isValidated, setIsValidated] = useState(false)
  const [usernameError, setError] = useState(null)
  const history = useHistory()
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
    if (username === '') {
      setError('Username field must not be empty!')
    } else if (username.length > 16) {
      setError('Max. 16 characters.')
    } else {
      setError(null)
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
          history.push('/listing')
        }
      })
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value.trim())
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input id="usernameInput" type="text" placeholder="Username" value={username} onChange={handleInputChange} />
        <button type="submit">Log in</button>
      </form>
      <div className="error">
        {firstLoad || isValidated || usernameError ? null : validationError}
      </div>
      <div className="error">{firstLoad || usernameError}</div>
    </div>
  )
}

LoginPage.propTypes = {
  LoginHandler: PropTypes.func
}
