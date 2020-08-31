import { createSlice } from '@reduxjs/toolkit'
import { checkUsername } from 'services/api/ValidationService'

import { ErrorTypes } from 'constants/ErrorTypes'

const initialState = {
  loading: 'idle',
  username: '',
  isValid: false,
  isLoggedIn: false,
  error: ErrorTypes.None
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = 'pending'
    },
    success: (state, action) => {
      state.loading = 'idle'
    },
    validity: (state, action) => {
      state.isValid = action.payload
    },
    login: (state, action) => {
      state.username = action.payload.username
      state.isLoggedIn = true
    },
    error: (state, action) => {
      state.isValid = false
      state.error = action.payload
    },
    logout: _ => initialState
  }
})

export const { loading, success, validity, error, login, logout } = loginSlice.actions
export default loginSlice.reducer

export const validateUsername = (username) => async dispatch => {
  try {
    dispatch(loading())
    const approved = await checkUsername(username)
    if (!approved) dispatch(error(ErrorTypes.Validation))
    dispatch(validity(approved))
    dispatch(success())
  } catch (err) {
    dispatch(error(ErrorTypes.Network))
  }
}
