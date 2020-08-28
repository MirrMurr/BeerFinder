import React from 'react'
import PropTypes from 'prop-types'
import { ErrorTypes } from 'constants/ErrorTypes'
import { ErrorMessages } from 'constants/ErrorMessages'

import styles from './ErrorMessage.module.scss'

export const ErrorMessage = ({ show, type }) => {
  if (ErrorTypes.None === type) return null
  return (show ? <div className={`${styles.error} ${type}`}>{ErrorMessages[type]}</div> : null)
}

ErrorMessage.propTypes = {
  show: PropTypes.bool,
  type (props, propName, componentName) { }
}
