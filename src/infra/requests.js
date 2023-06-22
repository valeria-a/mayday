import axios from'axios'
import * as urls from './urls'

export const getFlights = async () => {
    const response = await axios.get(urls.FLIGHTS_URL)
    return response.data
}