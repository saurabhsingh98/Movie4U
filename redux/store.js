import { configureStore } from '@reduxjs/toolkit'
import moviesData from './reducers/moviesData'
import movieDetails from './reducers/movieDetails'

export default configureStore({
  reducer: {
    moviesData: moviesData,
    movieDetails: movieDetails
  }
})