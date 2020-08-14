import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import { FilterForm } from './FilterForm'
import { ProductList } from './ProductList'
import { Pagination } from './Pagination'

export const ListingPage = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <div className="listing-container">
      <FilterForm />
      <ProductList />
      <Pagination />
    </div>
  )
}

ListingPage.propTypes = {
  isLoggedIn: PropTypes.bool
}
