import React, { useState, useEffect } from 'react'
import axios from 'axios'

import store from 'Stores/appStore'

import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'

const itemsPerPage = 9
export const ProductList = () => {
  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filteredBeers, setFilteredBeers] = useState([])
  const [paginatedBeers, setPaginatedBeers] = useState([])

  const { currentPage, filterConditions } = store.getState()

  const paginate = (pageNumber) => {
    store.dispatch({ type: 'SET_CURRENT_PAGE', pageNumber: pageNumber })
  }

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
      const beers = fetchedData.filter(beer => {
        return beer.name.toLowerCase().match(filterConditions.name.toLowerCase()) &&
                filterConditions.fromAbv <= beer.abv &&
                beer.abv <= filterConditions.toAbv
      })
      setFilteredBeers(beers)
    }

    filterBeers()
  }, [filterConditions, fetchedData])

  useEffect(() => {
    store.dispatch({ type: 'SET_FILTERED_BEERS', payload: filteredBeers })
  }, [filteredBeers])

  useEffect(() => {
    const indexOfLast = currentPage * itemsPerPage
    const indexOfFirst = indexOfLast - itemsPerPage
    setPaginatedBeers(filteredBeers.slice(indexOfFirst, indexOfLast))
  }, [filteredBeers, currentPage])

  if (loading) return <div><strong>Loading Beer data...</strong></div>

  return (
    <>
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
      <Pagination paginate={paginate} itemsPerPage={itemsPerPage} totalItems={filteredBeers.length} currentPage={currentPage} />
    </>
  )
}
