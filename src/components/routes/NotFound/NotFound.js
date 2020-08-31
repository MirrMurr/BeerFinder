import React from 'react'

import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2>Oops.. something went wrong.</h2>
      <h2>404: Page Not Found</h2>
    </div>
  )
}
