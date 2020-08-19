import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import store from 'Stores/appStore'

import { FilterForm } from '../Components/Listing/FilterForm'
import { ProductList } from '../Components/Listing/ProductList'
import { BeerInfo } from '../Components/Listing/BeerInfo'

export const ListingPage = () => {
  const { isLoggedIn } = store.getState()

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }

  return (
    <Switch>
      <Route path="/listing/:id" component={BeerInfo} />
      <Route path="/listing">
        <div className="listing-container">
          <div className="listing">
            <FilterForm />
            <ProductList />
          </div>
        </div>
      </Route>
    </Switch>
  )
}
