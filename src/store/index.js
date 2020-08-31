import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducer from 'reducers/index'
import { loadState } from 'services/persistence/sessionStorageService'

const persistedState = loadState()

const store = configureStore({
  reducer,
  persistedState,
  middleware: [thunk]
})

export default store
