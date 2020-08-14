import React from 'react'
import PropTypes from 'prop-types'

export const ProductCard = ({ imgUrl, name, abv, tagline, show }) => {
  return ((
    <div className={`product-card ${show ? '' : 'hidden'}`}>
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
    </div>)
  )
}

ProductCard.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  abv: PropTypes.number,
  tagline: PropTypes.string,
  show: PropTypes.bool
}
