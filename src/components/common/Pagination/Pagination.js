import React from 'react'
import { usePagination } from './usePagination'

import styles from './Pagination.module.scss'

export const Pagination = () => {
  const { paginate, pageNumbers, currentPage } = usePagination()

  return (
    <nav className={styles.pagination}>
      <ul>
        {pageNumbers.map(number => {
          const style = (number === currentPage) ? { backgroundColor: '#9003F4', color: '#FFFFFF' } : {}
          return (
            <li key={number}>
              <button onClick={() => paginate(number)} style={style}>
                {number}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
