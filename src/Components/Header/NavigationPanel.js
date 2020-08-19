import React from 'react'
import PropTypes from 'prop-types'
import '../../Stylesheets/styles.css'

import store from '../../Stores/appStore'

export const NavigationPanel = ({ LogoutHandler }) => {
  const { isLoggedIn, username } = store.getState()

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
