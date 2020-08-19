import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { ProductCard } from './ProductCard'
import { Pagination } from './Pagination'

// const Beers = [
//   { id: 1, name: 'Aranyaszok', abv: 3.2, tagline: 'naonjo', image_url: '' },
//   { id: 2, name: 'Blanc', abv: 4.5, tagline: 'legjobb', image_url: '' },
//   { id: 3, name: 'Dreher', abv: 2.8, tagline: 'nemrossz', image_url: '' },
//   { id: 4, name: 'Soproni', abv: 3.5, tagline: 'ezisjo', image_url: '' }
// ]

export const ProductList = ({ filterConditions }) => {
  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(false)
  const [filteredBeers, setFilteredBeers] = useState([])
  const [paginatedBeers, setPaginatedBeers] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(9)

  // const testConditions = (name, abv) => {
  //   return (name.toLowerCase().match(filterConditions.name.toLowerCase()) &&
  //     filterConditions.fromAbv <= abv &&
  //     abv <= filterConditions.toAbv)
  // }

  // TODO Pagination: Redux, Remember page number when coming back
  const paginate = (pageNumber) => {
    // window.localStorage.setItem('current-page', currentPage)
    setCurrentPage(pageNumber)
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
    window.localStorage.setItem('filteredBeers', JSON.stringify(filteredBeers))
  }, [filteredBeers])

  useEffect(() => {
    const indexOfLast = currentPage * itemsPerPage
    const indexOfFirst = indexOfLast - itemsPerPage
    setPaginatedBeers(filteredBeers.slice(indexOfFirst, indexOfLast))
  }, [filteredBeers, currentPage, itemsPerPage])

  if (loading) return <div><strong>Loading Beer data...</strong></div>

  return (
    <>
      <div className="product-list-container">
        <ul className="product-list">
          {paginatedBeers.map(product => {
            const show = (product.name.toLowerCase().match(filterConditions.name.toLowerCase()) &&
              filterConditions.fromAbv <= product.abv &&
              product.abv <= filterConditions.toAbv)

            return (
              <li key={product.id} className="product">
                <ProductCard
                  id={product.id}
                  imgUrl={product.image_url}
                  name={product.name}
                  abv={product.abv}
                  tagline={product.tagline}
                  show={show}
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

ProductList.propTypes = {
  filterConditions (props, propName, componentName) { }
}
