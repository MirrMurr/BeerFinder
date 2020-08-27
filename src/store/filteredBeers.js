import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  beers: []
}

const filteredBeersSlice = createSlice({
  name: 'filteredBeers',
  initialState,
  reducers: {
    setFilteredBeers: (_, action) => {
      return { beers: action.payload }
    },
    clearFilteredBeers: _ => initialState
  }
})

export const { setFilteredBeers, clearFilteredBeers } = filteredBeersSlice.actions
export default filteredBeersSlice.reducer
