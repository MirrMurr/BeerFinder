import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './ProductCard.module.scss'

export const ProductCard = ({ id, imgUrl, name, abv, tagline }) => {
  return (
    <div className={styles.productCard}>
      <Link to={`/listing/${id}`} className={styles.cardLink}>
        <div className={styles.productCardContainer}>
          <div className={styles.detailsContainer}>
            <p><strong>{name}</strong></p>
            <p>ABV: {abv}%</p>
            <p><i>{tagline}</i></p>
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.beerImage} src={imgUrl} alt={name} />
          </div>
        </div>
      </Link>
    </div>
  )
}

ProductCard.propTypes = {
  id: PropTypes.number,
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  abv: PropTypes.number,
  tagline: PropTypes.string
}
