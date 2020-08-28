import React from 'react'
import PropTypes from 'prop-types'

import styles from './LoginForm.module.scss'

export const UsernameInput = ({ onChange }) => {
  return (
    <input
      className={styles.usernameInput}
      type="text"
      placeholder="Username"
      onChange={onChange}
    />
  )
}

UsernameInput.propTypes = {
  onChange: PropTypes.func
}
