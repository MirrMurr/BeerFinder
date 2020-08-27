import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import styles from './BeerInfo.module.scss'

export const BeerInfo = () => {
  const [beer, setBeer] = useState([])
  const products = useSelector(state => state.filteredBeers.beers)
  const params = useParams()

  useEffect(() => {
    const beer = products.find(product => product.id === Number(params.id))
    setBeer(beer)
  }, [params.id, products])

  return (
    <div className={styles.beerInfo}>
      <h1>{beer.name}</h1>
      <h2>{beer.tagline}</h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoImageContainer}>
          <img className={styles.beerDetailImage} src={beer.image_url} alt={beer.name} />
        </div>
        <div className={styles.infotextContainer}>
          <h3>Description</h3>
          <p className={styles.description}>{beer.description}</p>
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
