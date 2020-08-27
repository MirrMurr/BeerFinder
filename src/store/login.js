import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  isLoggedIn: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (_, action) => {
      return {
        username: action.payload.username,
        isLoggedIn: true
      }
    },
    logout: _ => initialState
  }
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
