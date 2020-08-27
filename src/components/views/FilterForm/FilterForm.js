import React from 'react'
import { useFilterForm } from './useFilterForm'

export const FilterForm = () => {
  const { name, fromAbv, toAbv, handleNameInputChange, handleFromAbvChange, handleToAbvChange, onSubmit, clearForm } = useFilterForm()

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
