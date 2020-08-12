import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const LoginButton = ({ isLoggedIn, onClick }) => {
  const HandleClick = () => {
    onClick()
  }

  return (
    <Link to={`/${isLoggedIn ? '' : 'listing'}`}>
      <button onClick={HandleClick}>{isLoggedIn ? 'Log out' : 'Log in'}</button>
    </Link>
  )
}

LoginButton.propTypes = {
  isLoggedIn: PropTypes.bool,
  onClick: PropTypes.func
}
