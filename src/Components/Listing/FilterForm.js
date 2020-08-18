import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const FilterForm = ({ handleSubmit }) => {
  const [name, setName] = useState('')
  const [fromAbv, setFromAbv] = useState(0)
  const [toAbv, setToAbv] = useState(100)

  // TODO FilterForm: fromAbv < toAbv
  useEffect(() => {
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
    handleSubmit({ name: name, fromAbv: fromAbv, toAbv: toAbv })
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
        </div>
      </form>
    </div>
  )
}

FilterForm.propTypes = {
  handleSubmit: PropTypes.func
}
