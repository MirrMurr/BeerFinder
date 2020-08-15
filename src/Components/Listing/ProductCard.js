import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const ProductCard = ({ id, imgUrl, name, abv, tagline, show }) => {
  return (
    <div className={`product-card ${show ? '' : 'hidden'}`}>
      <Link to={`/listing/${id}`} className="card-link">
        <div className="container">
          <div className="details-container">
            <p><strong>{name}</strong></p>
            <p>ABV: {abv}%</p>
            <p><i>{tagline}</i></p>
          </div>
          <div className="image-container">
            <img className="beer-image" src={imgUrl} alt={name} />
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
  tagline: PropTypes.string,
  show: PropTypes.bool
}
