import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsPerPage: 6,
  totalItems: 0,
  currentPage: 1
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setItemsPerPage: (state, action) => {
      return { ...state, itemsPerPage: action.payload }
    },
    setTotalItems: (state, action) => {
      return { ...state, totalItems: action.payload }
    },
    setCurrentPage: (state, action) => {
      return { ...state, currentPage: action.payload }
    },
    resetPagination: (state, _) => {
      return { ...state, currentPage: 1 }
    }
  }
})

export const { setItemsPerPage, setTotalItems, setCurrentPage, resetPagination } = paginationSlice.actions
export default paginationSlice.reducer
