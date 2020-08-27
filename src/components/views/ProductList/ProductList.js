import React from 'react'
import { useProductList } from './useProductList'
import { ProductCard } from 'components/views/ProductCard/ProductCard'

export const ProductList = () => {
  const { loading, paginatedBeers } = useProductList()

  if (loading) return <div><strong>Loading Beer data...</strong></div>

  return (
    <div className="product-list-container">
      <ul className="product-list">
        {paginatedBeers.map(product => {
          return (
            <li key={product.id} className="product">
              <ProductCard
                id={product.id}
                imgUrl={product.image_url}
                name={product.name}
                abv={product.abv}
                tagline={product.tagline}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
