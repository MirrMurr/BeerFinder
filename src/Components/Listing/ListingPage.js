import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import { FilterForm } from './FilterForm'
import { ProductList } from './ProductList'
import { Pagination } from './Pagination'

export const ListingPage = ({ isLoggedIn }) => {
  const [filterCondition, setFilterCondition] = useState({ name: '', fromAbv: 0, toAbv: 100 })

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  const handleSubmitFilter = (filters) => {
    setFilterCondition(filters)
  }

  return (
    <div className="listing-container">
      <FilterForm handleSubmit={handleSubmitFilter} />
      <ProductList filterConditions={filterCondition} />
      <Pagination />
    </div>
  )
}

ListingPage.propTypes = {
  isLoggedIn: PropTypes.bool
}
