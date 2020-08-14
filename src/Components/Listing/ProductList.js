import React from 'react'

const Beers = (
  <ul>
    <li>Aranyaszok</li>
    <li>Blanc</li>
    <li>Soproni</li>
  </ul>
)

export const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {Beers}
    </div>
  )
}
