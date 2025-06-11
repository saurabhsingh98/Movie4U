import axios from 'axios'
import { API_KEY, BASE_URL } from '../config'

export const searchMovie = async (debouncedSearch, query) => {
    const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}`, {
    params: {
        s: debouncedSearch,
        type: query.type,
        page: query.page
    }
    })
    return response.data
}