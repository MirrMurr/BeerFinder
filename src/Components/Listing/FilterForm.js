import React, { useState, useEffect } from 'react'

import store from 'Stores/appStore'

export const FilterForm = () => {
  const { filterConditions } = store.getState()
  const [name, setName] = useState(filterConditions.name)
  const [fromAbv, setFromAbv] = useState(filterConditions.fromAbv)
  const [toAbv, setToAbv] = useState(filterConditions.toAbv)

  // TODO FilterForm: fromAbv < toAbv
  useEffect(() => {
    // eslint-disable-next-line no-undef
    if (fromAbv > toAbv) alert('no')
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
    store.dispatch({ type: 'RESET_PAGINATION' })
    store.dispatch({ type: 'SET_FILTER_CONDITIONS', payload: { name: name, fromAbv: fromAbv, toAbv: toAbv } })
  }

  const clearForm = () => {
    setName('')
    setFromAbv(0)
    setToAbv(100)
  }

  return (
    <div className="filter-form-container">
      <form onSubmit={onSubmit} className="filter-form">
        <div className="beer-name-input-container">
          <label htmlFor="name">Name: </label>
          <input className="beer-name-input" type="text" name="name" placeholder="name" onChange={handleNameInputChange} value={name} />
        </div>

        <div className="abv-input-container">
          <label htmlFor="abv">ABV: </label>
          <input className="abv-input" type="text" name="abv-from" placeholder="0" onChange={handleFromAbvChange} value={fromAbv} />
          <span> % - </span>
          <input className="abv-input" type="text" name="abv-to" placeholder="100" onChange={handleToAbvChange} value={toAbv} />
          <span> % </span>
          <button type="submit" className="filter-button">Filter</button>
          <button type="button" className="clear-button" onClick={clearForm}>✘</button>
        </div>
      </form>
    </div>
  )
}
