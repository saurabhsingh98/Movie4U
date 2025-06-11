import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MovieDetails = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const fetchMovieDetails = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${id}`)
                setMovie(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovieDetails()
    }, [id])

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen bg-gray-900'>
                <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500'></div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
                <img 
                    src={movie.Poster} 
                    alt={movie.Title} 
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="container mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.Title}</h1>
                        <div className="flex items-center gap-4 text-lg">
                            <span className="bg-purple-600 px-3 py-1 rounded-full">{movie.Year}</span>
                            <span>{movie.Runtime}</span>
                            <span>{movie.Rated}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column - Poster */}
                    <div className="md:col-span-1">
                        <div className="sticky top-8">
                            <img 
                                src={movie.Poster} 
                                alt={movie.Title} 
                                className="w-full rounded-lg shadow-xl"
                            />
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-yellow-400">★</span>
                                    <span>{movie.imdbRating}/10</span>
                                </div>
                                <div className="text-sm text-gray-400">
                                    {movie.imdbVotes} votes
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Plot */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 text-purple-400">Plot</h2>
                            <p className="text-gray-300 leading-relaxed">{movie.Plot}</p>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-800 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Cast</h3>
                                <p className="text-gray-300">{movie.Actors}</p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Director</h3>
                                <p className="text-gray-300">{movie.Director}</p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Genre</h3>
                                <div className="flex flex-wrap gap-2">
                                    {movie.Genre.split(', ').map((genre, index) => (
                                        <span key={index} className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                                            {genre}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">Language</h3>
                                <p className="text-gray-300">{movie.Language}</p>
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 text-purple-400">Ratings</h2>
                            <div className="space-y-4">
                                {movie.Ratings.map((rating, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-gray-300">{rating.Source}</span>
                                        <span className="bg-purple-600 px-3 py-1 rounded-full">
                                            {rating.Value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4 text-purple-400">Additional Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Country</h3>
                                    <p className="text-gray-300">{movie.Country}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Awards</h3>
                                    <p className="text-gray-300">{movie.Awards}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Released</h3>
                                    <p className="text-gray-300">{movie.Released}</p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">IMDB ID</h3>
                                    <p className="text-gray-300">{movie.imdbID}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails