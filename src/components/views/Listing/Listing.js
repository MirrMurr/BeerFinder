import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { FilterForm } from 'components/views/FilterForm/FilterForm'
import { ProductList } from 'components/views/ProductList/ProductList'
import { BeerInfo } from 'components/views/BeerInfo/BeerInfo'
import { Pagination } from 'components/views/Pagination/Pagination'

export const Listing = () => {
  const isLoggedIn = useSelector(state => state.login.isLoggedIn)

  if (!isLoggedIn) return <Redirect to="/" />

  return (
    <Switch>
      <Route path="/listing/:id" component={BeerInfo} />
      <Route path="/listing">
        <div className="listing-container">
          <div className="listing">
            <FilterForm />
            <ProductList />
            <Pagination />
          </div>
        </div>
      </Route>
    </Switch>
  )
}
