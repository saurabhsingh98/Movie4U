import React, { useState, useEffect, useCallback, useMemo } from 'react'
import MovieCard from '../components/MovieCard.jsx'
import { MOVIE_TYPE, DEFAULT_TYPE, DEFAULT_PAGE, DEFAULT_SEARCH } from '../../constant.js'
import { searchMovie } from '../service/searchMovie'
import { useDispatch, useSelector } from 'react-redux'
import { setMovies } from '../../redux/reducers/moviesData'

// Extracted Pagination component
const Pagination = React.memo(({ currentPage, totalResults, onPageChange }) => {
    const totalPages = Math.ceil(totalResults / 10)
    
    return (
        <div className='flex items-center justify-center gap-4 mt-8 pb-8'>
            <button 
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center w-12 h-12
                    ${currentPage <= 1 
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                        : 'bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800'}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                &lt;
            </button>
            <span className='text-lg font-semibold text-gray-300 min-w-[40px] text-center'>{currentPage} / {totalPages} pages</span>
            <button 
                className='px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center w-12 h-12 bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-800'
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
            >
                &gt;
            </button>
            
        </div>
    )
})

Pagination.displayName = 'Pagination'

const Home = () => {
    const [query, setQuery] = useState({
        type: DEFAULT_TYPE,
        page: DEFAULT_PAGE,
        total_results: 0
    })

    const [search, setSearch] = useState(DEFAULT_SEARCH)
    const [debouncedSearch, setDebouncedSearch] = useState(DEFAULT_SEARCH)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const dispatch = useDispatch()
    const movies = useSelector((state) => state.moviesData.movies)
    
    const fetchMovies = useCallback(async () => {
        if (!debouncedSearch.trim()) return;
        
        setLoading(true)
        try {
            const response = await searchMovie(debouncedSearch, query)
            if (response?.Search) {
                dispatch(setMovies(response.Search))
                setQuery(prev => ({ ...prev, total_results: response.totalResults }))
            } else {
                dispatch(setMovies([]))
            }
            setError(null)
        } catch (err) {
            console.error('Error fetching movies:', err)
            setError('Failed to fetch movies. Please try again.')
            dispatch(setMovies([]))
        } finally {
            setLoading(false)
        }
    }, [debouncedSearch, query.type, query.page, dispatch])

    // Initial search effect
    useEffect(() => {
        fetchMovies()
    }, [fetchMovies])

    // Debounce effect for search
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (search.trim()) {
                setDebouncedSearch(search)
            }
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [search])

    const handleQueryChange = useCallback((e) => {
        setQuery(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }, [])

    const handleSearch = useCallback((e) => {
        setSearch(e.target.value)
        setQuery(prev => ({ ...prev, page: DEFAULT_PAGE }))
    }, [])

    const handlePageChange = useCallback((newPage) => {
        setQuery(prev => ({ ...prev, page: newPage }))
    }, [])

    // Memoize the movie list
    const movieList = useMemo(() => {
        if (!movies?.length) {
            return <p className='text-gray-300 col-span-full text-center'>No movies found</p>
        }
        
        return movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
        ))
    }, [movies])

    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
            <div className='container mx-auto px-4 py-12'>
                <div className='text-center mb-12'>
                    <h1 className='text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
                        Welcome to Movies4u
                    </h1>
                    <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                        Your one-stop destination for discovering and exploring the world of cinema
                    </p>
                    <div className='flex flex-col gap-4 max-w-xl mx-auto mt-4'>
                        <select 
                            className='w-full p-2 rounded-md text-white bg-gray-800 border border-gray-700'
                            name='type'
                            value={query.type}
                            onChange={handleQueryChange}
                        >
                            {MOVIE_TYPE.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <input 
                            type="text" 
                            name="search"
                            placeholder='Search for a movie' 
                            className='w-full p-2 rounded-md text-white bg-gray-800 border border-gray-700' 
                            value={search} 
                            onChange={handleSearch}
                        />
                    </div>
                </div>

                {error && (
                    <div className='text-red-500 text-center mb-4'>
                        {error}
                    </div>
                )}

                {loading && (
                    <div className='text-center mb-4'>
                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
                    </div>
                )}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {movieList}
                </div>
            </div>

            <Pagination 
                currentPage={query.page}
                totalResults={query.total_results}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default React.memo(Home)

