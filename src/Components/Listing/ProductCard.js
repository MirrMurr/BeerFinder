import React from 'react'
import PropTypes from 'prop-types'

export const ProductCard = ({ name, abv, tagline }) => {
  return (
    <div className="product-card">
      <p>picture</p>
      <p><strong>{name}</strong></p>
      <p>ABV: {abv}%</p>
      <p><i>{tagline}</i></p>
    </div>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  abv: PropTypes.number,
  tagline: PropTypes.string
}
