import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  fromAbv: 0,
  toAbv: 100
}

const filterConditionsSlice = createSlice({
  name: 'filterConditions',
  initialState,
  reducers: {
    setFilterConditions: (_, action) => {
      return action.payload
    },
    setNameFilter: (state, action) => {
      return { ...state, name: action.payload }
    },
    setFromAbv: (state, action) => {
      return { ...state, fromAbv: action.payload }
    },
    setToAbv: (state, action) => {
      return { ...state, toAbv: action.payload }
    },
    clearFilters: _ => {
      return initialState
    }
  }
})

export const { setFilterConditions, setNameFilter, setFromAbv, setToAbv, clearFilters } = filterConditionsSlice.actions
export default filterConditionsSlice.reducer
