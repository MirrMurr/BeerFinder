import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../Stylesheets/styles.css'

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
        <p className="user-greeting">Hello, {givenUsername === '' ? username : givenUsername}!</p>
        <button className="logout-button" onClick={HandleClick}>Logout</button>
      </div>
    )
  )
}

NavigationPanel.propTypes = {
  givenUsername: PropTypes.string,
  LogoutHandler: PropTypes.func,
  isVisible: PropTypes.bool
}
