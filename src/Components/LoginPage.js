import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const LoginPage = ({ LoginHandler }) => {
  const HandleClick = () => {
    LoginHandler()
  }

  return (
    <div>
      <h1>Login</h1>
      <Link to="/listing">
        <button onClick={HandleClick}>Log in</button>
      </Link>
    </div>
  )
}

LoginPage.propTypes = {
  LoginHandler: PropTypes.func
}
