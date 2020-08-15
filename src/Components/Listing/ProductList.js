import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { ProductCard } from './ProductCard'

// const Beers = [
//   { id: 1, name: 'Aranyaszok', abv: 3.2, tagline: 'naonjo', image_url: '' },
//   { id: 2, name: 'Blanc', abv: 4.5, tagline: 'legjobb', image_url: '' },
//   { id: 3, name: 'Dreher', abv: 2.8, tagline: 'nemrossz', image_url: '' },
//   { id: 4, name: 'Soproni', abv: 3.5, tagline: 'ezisjo', image_url: '' }
// ]

export const ProductList = ({ filterConditions }) => {
  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      setLoading(false)
      setFetchedData(response.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filterBeers = () => {
      const beers = fetchedData.map(product => {
        const name = product.name
        const imageUrl = product.image_url
        const abv = product.abv
        const tagline = product.tagline

        const show = name.toLowerCase().match(filterConditions.name.toLowerCase()) &&
          filterConditions.fromAbv <= abv &&
          abv <= filterConditions.toAbv

        return (
          <li key={product.id} className="product">
            <Link to={`/listing/${product.id}`}>
              <ProductCard imgUrl={imageUrl} name={name} abv={abv} tagline={tagline} show={show} />
            </Link>
          </li>
        )
      })
      setProducts(beers)
    }

    filterBeers()
  }, [filterConditions.name, filterConditions.fromAbv, filterConditions.toAbv, fetchedData])

  if (loading) return <div><strong>Loading Beer data...</strong></div>

  return (
    <div className="product-list-container">
      <ul className="product-list">
        {products}
      </ul>
    </div>
  )
}

ProductList.propTypes = {
  filterConditions (props, propName, componentName) { }
}
