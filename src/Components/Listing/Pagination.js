import React from 'react'
import PropTypes from 'prop-types'

export const Pagination = ({ paginate, itemsPerPage, totalItems }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); ++i) {
    pageNumbers.push(i)
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  paginate: PropTypes.func,
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number
}
