import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'

export const createStore = (initialStore = {}) => configureStore({
  reducer: {
    counter: counterReducer
  },
  preloadedState: initialStore
})