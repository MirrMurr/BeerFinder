import React from 'react'
import { useSelector } from 'react-redux'
import { useLogin } from 'hooks/useLogin'

import styles from './NavigationPanel.module.scss'

export const NavigationPanel = () => {
  const { isLoggedIn, username } = useSelector(state => state.login)
  const { handleLogout } = useLogin()

  const onClick = () => {
    handleLogout()
  }

  return (
    !isLoggedIn ? null : (
      <div className={styles.navigationPanel}>
        <p className={styles.userGreeting}>Hello, {username}!</p>
        <button className={styles.logoutBtn} onClick={onClick}>Logout</button>
      </div>
    )
  )
}
