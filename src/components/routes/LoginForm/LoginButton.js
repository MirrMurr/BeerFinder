import React from 'react'

import styles from './LoginForm.module.scss'

export const LoginButton = () => {
  return (
    <div className={styles.loginButtonContainer}>
      <button
        className={styles.loginBtn}
        type="submit"
      >Log in
      </button>
    </div>
  )
}
