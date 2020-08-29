import { configureStore } from '@reduxjs/toolkit'
import reducer from 'reducers/index'
import { loadState } from 'services/persistence/sessionStorageService'

const persistedState = loadState()

const store = configureStore({
  reducer,
  persistedState
  // middleware: applyMiddleware(thunk)
})

export default store
