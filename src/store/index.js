import { configureStore } from '@reduxjs/toolkit'
import reducer from 'reducers/index'
import { loadState } from 'services/persistence/LocalStorageService'

const persistedState = loadState()

const store = configureStore({
  reducer,
  persistedState
  // middleware: applyMiddleware(thunk)
})

export default store
