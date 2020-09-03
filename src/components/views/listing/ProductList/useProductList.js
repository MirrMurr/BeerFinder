import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setTotalItems } from 'store/pagination'
import { setFilteredBeers } from 'store/filteredBeers'
import { fetchData } from 'store/beers'

export const useProductList = () => {
  const [paginatedBeers, setPaginatedBeers] = useState([])

  const fetchedData = useSelector(state => state.beers.list)
  const loading = useSelector(state => state.beers.loading) === 'pending'
  const currentPage = useSelector(state => state.pagination.currentPage)
  const itemsPerPage = useSelector(state => state.pagination.itemsPerPage)
  const filterConditions = useSelector(state => state.filterConditions)
  const filteredBeers = useSelector(state => state.filteredBeers.beers)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetchedData.length === 0) dispatch(fetchData())
  }, [fetchedData, dispatch])

  useEffect(() => {
    const filterBeers = () => {
      const beers = fetchedData.filter(beer => {
        return beer.name.toLowerCase().match(filterConditions.name.toLowerCase()) &&
                filterConditions.fromAbv <= beer.abv &&
                beer.abv <= filterConditions.toAbv
      })
      dispatch(setFilteredBeers(beers))
    }

    filterBeers()
  }, [filterConditions, fetchedData, dispatch])

  useEffect(() => {
    const indexOfLast = currentPage * itemsPerPage
    const indexOfFirst = indexOfLast - itemsPerPage
    dispatch(setTotalItems(filteredBeers.length))
    setPaginatedBeers(filteredBeers.slice(indexOfFirst, indexOfLast))
  }, [filteredBeers, currentPage, itemsPerPage, dispatch])

  return { loading, paginatedBeers }
}
