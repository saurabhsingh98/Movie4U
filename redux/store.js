import { configureStore } from '@reduxjs/toolkit'
import moviesData from './reducers/moviesData'

export default configureStore({
  reducer: {
    moviesData: moviesData
  }
})