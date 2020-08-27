import React from 'react'
import PropTypes from 'prop-types'

export const UsernameInput = ({ onChange }) => {
  return (
    <input
      className="usernameInput"
      type="text"
      placeholder="Username"
      onChange={onChange}
    />
  )
}

UsernameInput.propTypes = {
  onChange: PropTypes.func
}
