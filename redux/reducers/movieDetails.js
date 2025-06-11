import { createSlice } from '@reduxjs/toolkit'

const movieDetails = createSlice({
    name: 'movieDetails',
    initialState: {
        movieDetails: []
    },

    reducers: {
        setMovieDetails: (state, action) => {
            const existingMovie = state.movieDetails.find(movie => movie.imdbID === action.payload.imdbID)
            if (!existingMovie) {
                state.movieDetails.push(action.payload)
            }
        },
        getMovieDetails: (state) => {
            return state.movieDetails
        }
    }
})

export const { setMovieDetails, getMovieDetails } = movieDetails.actions
export default movieDetails.reducer