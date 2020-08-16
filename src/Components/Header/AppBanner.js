import React from 'react'
import '../../Stylesheets/styles.css'
import GrapeLogo from '../../grape_logo.svg'

export const AppBanner = () => {
  return (
    <div className="app-banner">
      <img className="company" src={GrapeLogo} alt="grape logo" />
      <div className="app-name-container">
        <p className="app-name">Beer Finder®</p>
      </div>
    </div>
  )
}
