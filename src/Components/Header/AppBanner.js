import React from 'react'
import '../../Stylesheets/styles.css'
import GrapeLogo from '../../grape_logo.svg'

export const AppBanner = () => {
  return (
    <div className="Banner">
      {/* <h3 className="Company">Grape Solutions</h3> */}
      <img className="Company" src={GrapeLogo} alt="grape logo" />
      {/* <GrapeLogo fill="white" /> */}
      <h3 className="AppName">Beer Finder®</h3>
    </div>
  )
}
