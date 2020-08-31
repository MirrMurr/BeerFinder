import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { FilterForm } from 'components/views/FilterForm/FilterForm'
import { ProductList } from 'components/views/ProductList/ProductList'
import { BeerInfo } from 'components/views/BeerInfo/BeerInfo'
import { Pagination } from 'components/views/Pagination/Pagination'

export const Listing = () => {
  return (
    <Switch>
      <Route path="/listing/:id" component={BeerInfo} />
      <Route path="/listing/">
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
