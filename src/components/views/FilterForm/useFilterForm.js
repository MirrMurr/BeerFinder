import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { resetPagination } from 'store/pagination'
import { setFilterConditions, clearFilters } from 'store/filterConditions'

export const useFilterForm = () => {
  const filterConditions = useSelector(state => state.filterConditions)
  const [name, setName] = useState(filterConditions.name)
  const [fromAbv, setFromAbv] = useState(filterConditions.fromAbv)
  const [toAbv, setToAbv] = useState(filterConditions.toAbv)

  const dispatch = useDispatch()

  useEffect(() => {
    setName(filterConditions.name)
    setFromAbv(filterConditions.fromAbv)
    setToAbv(filterConditions.toAbv)
  }, [filterConditions.name, filterConditions.fromAbv, filterConditions.toAbv])

  // TODO FilterForm: fromAbv < toAbv
  useEffect(() => {
    if (fromAbv > toAbv) window.alert('no')
  }, [fromAbv, toAbv])

  const handleNameInputChange = (e) => {
    setName(e.target.value)
  }

  const handleFromAbvChange = (e) => {
    setFromAbv(e.target.value)
  }

  const handleToAbvChange = (e) => {
    setToAbv(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(resetPagination())
    dispatch(setFilterConditions({ name, fromAbv, toAbv }))
  }

  const clearForm = () => {
    dispatch(clearFilters())
  }

  return { name, fromAbv, toAbv, handleNameInputChange, handleFromAbvChange, handleToAbvChange, onSubmit, clearForm }
}
