import axios from 'axios'
import {BASE_URL} from '../config'

export const getMovieDetails = async (id) => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY
    const response = await axios.get(`${BASE_URL}?apikey=${apiKey}&i=${id}`)
    return response.data
}