import { createSlice } from '@reduxjs/toolkit'

const moviesData = createSlice({
    name: 'moviesData',
    initialState: {
        movies: []
    },

    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        getMovies: (state) => {
            return state.movies
        }
    }
})

export const { setMovies, getMovies } = moviesData.actions
export default moviesData.reducer