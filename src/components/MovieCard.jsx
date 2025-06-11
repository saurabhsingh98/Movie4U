import React from 'react'
import { DEFAULT_POSTER } from '../../constant'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    // default poster
    if(movie.Poster === "N/A") {
        movie.Poster = DEFAULT_POSTER
    }

    // navigate to movie details
    const navigate = useNavigate()
    const handleMovieDetails = () => {
        navigate(`/movie/${movie.imdbID}`)
    }

    return (
        <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl' onClick={handleMovieDetails}>
            <div className='h-48 bg-gradient-to-r from-purple-500 to-pink-500' style={{ backgroundImage: `url(${movie.Poster || DEFAULT_POSTER})` }}></div>
            <div className='p-6'>
                <h2 className='text-2xl font-bold text-white mb-2'>{movie.Title}</h2>
                <p className='text-gray-300'>{movie.Year}</p>
                <button className='mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300'>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default MovieCard