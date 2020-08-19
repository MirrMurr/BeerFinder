import { combineReducers } from 'redux'
import { isLoggedIn } from 'Reducers/isLoggedIn'
import { username } from 'Reducers/username'
import { filterConditions } from 'Reducers/filterConditions'
import { filteredBeers } from 'Reducers/filteredBeers'
import { currentPage } from 'Reducers/currentPage'

export const rootReducer = combineReducers({
  isLoggedIn,
  username,
  filterConditions,
  filteredBeers,
  currentPage
})
