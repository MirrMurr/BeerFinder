import { configureStore } from '@reduxjs/toolkit'
import reducer from 'reducers/index'
import { loadState } from 'services/persistence/LocalStorageService'

const persistedState = loadState()

const store = configureStore({
  reducer,
  persistedState
})

export default store
