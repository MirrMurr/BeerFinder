import React from 'react'
import PropTypes from 'prop-types'
import { ErrorTypes } from '../Constants/ErrorTypes.js'
import { ErrorMessages } from '../Constants/ErrorMessages.js'

export const ErrorMessage = ({ show, type }) => {
  if (ErrorTypes.NONE === type) return null
  return (show ? <div className={`error ${type}`}>{ErrorMessages[type]}</div> : null)
}

ErrorMessage.propTypes = {
  show: PropTypes.bool,
  type (props, propName, componentName) { }
}
