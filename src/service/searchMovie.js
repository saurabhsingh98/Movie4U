import axios from 'axios'
import { BASE_URL } from '../config'

export const searchMovie = async (debouncedSearch, query) => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY
    const response = await axios.get(`${BASE_URL}/?apikey=${apiKey}`, {
    params: {
        s: debouncedSearch,
        type: query.type,
        page: query.page
    }
    })
    return response.data
}