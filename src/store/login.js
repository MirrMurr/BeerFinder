import { createSlice } from '@reduxjs/toolkit'
import { testUsername, checkUsername } from 'services/api/ValidationService'

import { ErrorTypes } from 'constants/ErrorTypes'

const initialState = {
  loading: 'idle',
  username: '',
  isValid: false,
  isLoggedIn: false,
  errorType: ErrorTypes.None
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.loading = 'pending'
    },
    invalid: (state, action) => {
      state.isValid = false
      state.errorType = action.payload
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
      state.errorType = action.payload.errorType
    },
    logout: _ => initialState
  }
})

export const { loading, invalid, success, validity, login, error, logout } = loginSlice.actions
export default loginSlice.reducer

export const validateUsername = (username) => async dispatch => {
  const errorType = testUsername(username)
  let isValid = errorType === ErrorTypes.None
  if (!isValid) return dispatch(invalid(errorType))

  try {
    dispatch(loading())
    const approved = await checkUsername(username)
    if (!approved) dispatch(invalid(ErrorTypes.Validation))
    isValid = isValid && approved
    dispatch(success())
    dispatch(validity(isValid))
  } catch (err) {
    dispatch(error({ errorType: ErrorTypes.Network }))
  }
}
