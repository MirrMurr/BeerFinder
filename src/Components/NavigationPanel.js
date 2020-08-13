import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../Stylesheets/styles.css'

export const NavigationPanel = ({ givenUsername, LogoutHandler, isVisible }) => {
  const [username, setUsername] = useState(givenUsername)

  useEffect(() => {
    setUsername(window.localStorage.getItem('username'))
  }, [])

  const HandleClick = () => {
    LogoutHandler()
  }

  return (
    !isVisible ? null : (
      <div className="NavigationPanel">
        <h3>Hello, {givenUsername === '' ? username : givenUsername}!</h3>
        <button id="logout-button" onClick={HandleClick}>Log Out </button>
      </div>
    )
  )
}

NavigationPanel.propTypes = {
  givenUsername: PropTypes.string,
  LogoutHandler: PropTypes.func,
  isVisible: PropTypes.bool
}
