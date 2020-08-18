import React, { useState, useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import { FilterForm } from '../Components/Listing/FilterForm'
import { ProductList } from '../Components/Listing/ProductList'
import { BeerInfo } from '../Components/Listing/BeerInfo'

export const ListingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // TODO Redux
  const [filterConditions, setFilterConditions] = useState({ name: '', fromAbv: 0, toAbv: 100 })

  useEffect(() => {
    return () => {
      setIsLoggedIn(window.localStorage.getItem('isLoggedIn') === '')
    }
  }, [])

  const handleSubmitFilter = (filters) => {
    setFilterConditions(filters)
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
            <ProductList filterConditions={filterConditions} />
          </div>
        </div>
      </Route>
    </Switch>
  )
}
