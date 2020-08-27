import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const BeerInfo = () => {
  const [beer, setBeer] = useState([])
  const products = useSelector(state => state.filteredBeers.beers)
  const params = useParams()

  useEffect(() => {
    const beer = products.find(product => product.id === Number(params.id))
    setBeer(beer)
  }, [params.id, products])

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
