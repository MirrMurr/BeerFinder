import React from 'react'
import { useFilterForm } from './useFilterForm'

import styles from './FilterForm.module.scss'

export const FilterForm = () => {
  const { name, fromAbv, toAbv, handleNameInputChange, handleFromAbvChange, handleToAbvChange, onSubmit, clearForm } = useFilterForm()

  return (
    <div className={styles.filterFormContainer}>
      <form onSubmit={onSubmit} className={styles.filterForm}>
        <div className={styles.beerNameInputContainer}>
          <label htmlFor="name">Name: </label>
          <input className={styles.beerNameInput} type="text" name="name" placeholder="name" onChange={handleNameInputChange} value={name} />
        </div>

        <div className={styles.abvInputContainer}>
          <label htmlFor="abv">ABV: </label>
          <input className={styles.abvInput} type="text" name="abvFrom" placeholder="0" onChange={handleFromAbvChange} value={fromAbv} />
          <span> % - </span>
          <input className={styles.abvInput} type="text" name="abvTo" placeholder="100" onChange={handleToAbvChange} value={toAbv} />
          <span> % </span>
          <button type="submit" className={styles.filterBtn}>Filter</button>
          <button type="button" className={styles.clearBtn} onClick={clearForm}>✘</button>
        </div>
      </form>
    </div>
  )
}
