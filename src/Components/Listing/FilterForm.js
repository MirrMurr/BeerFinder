import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export const FilterForm = ({ handleSubmit }) => {
  const [name, setName] = useState('')
  const [fromAbv, setFromAbv] = useState(0)
  const [toAbv, setToAbv] = useState(100)

  // TODO lehet ezt szebben is....
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
    <div className="filter-form">
      <h3>Filter</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="name" onChange={handleNameInputChange} value={name} />
        <label htmlFor="abv">ABV: </label>
        <input type="text" name="abv-from" placeholder="0" onChange={handleFromAbvChange} value={fromAbv} />
        <span> % - </span>
        <input type="text" name="abv-to" placeholder="100" onChange={handleToAbvChange} value={toAbv} />
        <span> % </span>
        <button type="submit">Filter</button>
      </form>
    </div>
  )
}

FilterForm.propTypes = {
  handleSubmit: PropTypes.func
}
