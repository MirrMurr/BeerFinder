import React, { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import axios from 'axios'

export const ProductList = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      setLoading(false)
      const beers = response.data.map(product => {
        return (
          <li key={product.id} className="product">
            <ProductCard name={product.name} abv={product.abv} tagline={product.tagline} />
          </li>
        )
      })
      setProducts(beers)
    }

    fetchData()
  }, [])

  if (loading) return <div><strong>Loading Beer data...</strong></div>

  return (
    <div className="product-list-container">
      <ul className="product-list">
        {products}
      </ul>
    </div>
  )
}
