import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

export const ListingPage = ({ isLoggedIn }) => {
  const Beers = (
    <ul>
      <li>Aranyaszok</li>
      <li>Blanc</li>
      <li>Soproni</li>
    </ul>
  )

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h1>Beers</h1>
      {Beers}
    </div>
  )
}

ListingPage.propTypes = {
  isLoggedIn: PropTypes.bool
}
