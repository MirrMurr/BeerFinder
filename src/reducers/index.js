import { combineReducers } from 'redux'
import login from 'store/login'
import filterConditions from 'store/filterConditions'
import filteredBeers from 'store/filteredBeers'
import pagination from 'store/pagination'

export default combineReducers({
  login,
  filterConditions,
  filteredBeers,
  pagination
})
