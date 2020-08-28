import { createSlice } from '@reduxjs/toolkit'

import { fetchBeers } from 'services/api/BeerFetchingService'

const initialState = {
  loading: 'idle',
  list: [],
  error: null
}

const beersSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    loading: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    fetchedBeers: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.list = action.payload
        state.error = null
      }
    },
    failure: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = action.payload
      }
    }
  }
})

export const { loading, fetchedBeers, failure } = beersSlice.actions
export default beersSlice.reducer

export const fetchData = () => async dispatch => {
  try {
    dispatch(loading())
    const beers = await fetchBeers()
    dispatch(fetchedBeers(beers))
  } catch (err) {
    dispatch(failure(err.toString()))
  }
}
