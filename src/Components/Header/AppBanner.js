import React from 'react'
import '../../Stylesheets/styles.css'
import GrapeLogo from '../../grape_logo.svg'

export const AppBanner = () => {
  return (
    <div className="Banner">
      <img className="Company" src={GrapeLogo} alt="grape logo" />
      <h3 className="AppName">Beer Finder®</h3>
    </div>
  )
}
