import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

export const LoginPage = ({ LoginHandler }) => {
  const [username, setUsername] = useState('')
  const history = useHistory()
  let error = username === '' ? 'Username field must not be empty!' : null
  if (!error) {
    error = username.length > 16 ? 'Max. 16 characters.' : null
  }
  const [firstLoad, setFirstLoad] = useState(false)

  useEffect(() => {
    setFirstLoad(false)
  }, [username])

  useEffect(() => {
    setFirstLoad(true)
  }, [])

  // TODO useEffect -> call yesno.wtf/api / useValidation own hook
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!error) {
      LoginHandler(username)
      history.push('/listing')
    }
  }

  const handleInputChange = (e) => {
    setUsername(e.target.value.trim())
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input id="usernameInput" type="text" placeholder="Username" value={username} onChange={handleInputChange} />
        <button disabled={Boolean(error)} type="submit">Log in</button>
      </form>
      <div id="error">{firstLoad ? null : error}</div>
    </div>
  )
}

LoginPage.propTypes = {
  LoginHandler: PropTypes.func
}
