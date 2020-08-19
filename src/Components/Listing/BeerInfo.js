import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import store from 'Stores/appStore'

export const BeerInfo = () => {
  const [beer, setBeer] = useState([])
  const params = useParams()

  useEffect(() => {
    const products = store.getState().filteredBeers
    const beer = products.find(product => product.id === Number(params.id))
    setBeer(beer)
  }, [params.id])

  return (
    <div className="beer-info">
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <div className="info-container">
        <div className="info-image-container">
          <img className="beer-detail-image" src={beer.image_url} alt={beer.name} />
        </div>
        <div className="info-text-container">
          <h3>Description</h3>
          <p className="description">{beer.description}</p>
          <h3>ABV: {beer.abv}%</h3>
          <h3>Food pairings:</h3>
          <ul>
            {beer.food_pairing ? (beer.food_pairing.map(fp => {
              return (
                <li key={fp}>
                  {fp}
                </li>
              )
            })) : 'Your choice 😉'}
          </ul>
        </div>
      </div>
    </div>
  )
}
