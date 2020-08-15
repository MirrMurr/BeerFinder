import React, { useState, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { FilterForm } from './FilterForm'
import { ProductList } from './ProductList'
import { BeerInfo } from './BeerInfo'

export const ListingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // TODO Redux
  const [filterCondition, setFilterCondition] = useState({ name: '', fromAbv: 0, toAbv: 100 })

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('isLoggedIn') === 'true')
  }, [])

  const handleSubmitFilter = (filters) => {
    setFilterCondition(filters)
  }

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <Switch>
      <Route path="/listing/:id" component={BeerInfo} />

      <Route path="/listing">
        <div className="listing-container">
          <div className="listing">
            <FilterForm handleSubmit={handleSubmitFilter} />
            <ProductList filterConditions={filterCondition} />
          </div>
        </div>
      </Route>
    </Switch>
  )
}
