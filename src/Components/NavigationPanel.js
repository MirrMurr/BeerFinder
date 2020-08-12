import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../Stylesheets/styles.css'

export const NavigationPanel = ({ username, LogoutHandler, isVisible }) => {
  const HandleClick = () => {
    LogoutHandler()
  }

  return (
    !isVisible ? null : (
      <div className="NavigationPanel">
        <h3>Hello, {username}!</h3>
        <Link to="/">
          <button onClick={HandleClick}>
            Log Out
          </button>
        </Link>
      </div>
    )
  )
}

NavigationPanel.propTypes = {
  username: PropTypes.string,
  LogoutHandler: PropTypes.func,
  isVisible: PropTypes.bool
}
