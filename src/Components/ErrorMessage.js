import React from 'react'
import PropTypes from 'prop-types'
import { ErrorTypes } from '../Constants/ErrorTypes.js'
import { ErrorMessages } from '../Constants/ErrorMessages.js'

export const ErrorMessage = ({ disabled, type }) => {
  if (ErrorTypes.NONE === type) return null
  return (disabled ? null : <div className={`error ${type}`}>{ErrorMessages[type]}</div>)
}

ErrorMessage.propTypes = {
  disabled: PropTypes.bool,
  type (props, propName, componentName) { }
}
