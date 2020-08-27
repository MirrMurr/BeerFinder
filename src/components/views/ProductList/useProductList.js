import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { setTotalItems } from 'store/pagination'
import { setFilteredBeers } from 'store/filteredBeers'

export const useProductList = () => {
  const [paginatedBeers, setPaginatedBeers] = useState([])

  const [fetchedData, setFetchedData] = useState([])
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const filteredBeers = useSelector(state => state.filteredBeers.beers)
  const currentPage = useSelector(state => state.pagination.currentPage)
  const itemsPerPage = useSelector(state => state.pagination.itemsPerPage)
  const filterConditions = useSelector(state => state.filterConditions)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await axios.get('https://api.punkapi.com/v2/beers')
      setLoading(false)
      setFetchedData(response.data) // TODO Punk api: valahogy ezt store-ba ?
    }
    fetchData()
  }, [])

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
