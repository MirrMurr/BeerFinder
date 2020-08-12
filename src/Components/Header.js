import React from 'react'
import { AppBanner } from './AppBanner.js'
import { NavigationPanel } from './NavigationPanel.js'
import PropTypes from 'prop-types'
import '../Stylesheets/styles.css'

export const Header = ({ LogoutHandler, isLoggedIn }) => {
  return (
    <div className="Header">
      <AppBanner />
      <NavigationPanel username="Adam" LogoutHandler={LogoutHandler} isVisible={isLoggedIn} />
    </div>
  )
}

Header.propTypes = {
  LogoutHandler: PropTypes.func,
  isLoggedIn: PropTypes.bool
}
