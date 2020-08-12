import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const LinkButton = ({ to: destination, onClick }) => {
  return (
    <Link to={destination}>
      <button onClick={HandleClick}>{Children}</button>
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func
}
