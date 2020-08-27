import React from 'react'
import { AppBanner } from 'components/common/AppBanner/AppBanner'
import { NavigationPanel } from 'components/common/NavigationPanel/NavigationPanel'

import './Header.module.scss'

export const Header = () => {
  return (
    <header>
      <AppBanner />
      <NavigationPanel />
    </header>
  )
}
