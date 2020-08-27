import React from 'react'
import PropTypes from 'prop-types'
import { AppBanner } from 'components/common/AppBanner/AppBanner'
import { NavigationPanel } from 'components/common/NavigationPanel/NavigationPanel'

export const Header = ({ handleLogout }) => {
  return (
    <header>
      <AppBanner />
      <NavigationPanel LogoutHandler={handleLogout} />
    </header>
  )
}

Header.propTypes = {
  handleLogout: PropTypes.func
}
