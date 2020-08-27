import React from 'react'
import GrapeLogo from 'grape_logo.svg'

import styles from './AppBanner.module.scss'

export const AppBanner = () => {
  return (
    <div className={styles.appBanner}>
      <img className={styles.companyLogo} src={GrapeLogo} alt="grape logo" />
      <div className={styles.appNameContainer}>
        <p className={styles.appName}>Beer Finder®</p>
      </div>
    </div>
  )
}
