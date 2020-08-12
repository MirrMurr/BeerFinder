import React from 'react'

export const ListingPage = () => {
  const Beers = (
    <ul>
      <li>Aranyaszok</li>
      <li>Blanc</li>
      <li>Soproni</li>
    </ul>
  )

  return (
    <div>
      <h1>Beers</h1>
      {Beers}
    </div>
  )
}
