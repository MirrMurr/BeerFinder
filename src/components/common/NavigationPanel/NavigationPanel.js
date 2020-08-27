import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

export const NavigationPanel = ({ LogoutHandler }) => {
  const { isLoggedIn, username } = useSelector(state => state.login)

  const HandleClick = () => {
    LogoutHandler()
  }

  return (
    !isLoggedIn ? null : (
      <div className="navigation-panel">
        <p className="user-greeting">Hello, {username}!</p>
        <button className="logout-button" onClick={HandleClick}>Logout</button>
      </div>
    )
  )
}

NavigationPanel.propTypes = {
  LogoutHandler: PropTypes.func
}
