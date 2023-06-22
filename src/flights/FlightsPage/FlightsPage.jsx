import { useEffect, useState } from "react";
import { getFlights } from "../../infra/requests";
import { CircularProgress } from "@mui/material";

const FlightsPage = () => {

    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const flightsData = await getFlights()
            setFlights(flightsData.results)
            setLoading(false)
        }

        fetchData()

    }, [])

    if (loading) {
        return <CircularProgress />
    }

    const items = flights.map((flight) => <li key={flight.id}>{`${flight.flight_code}`}</li>)
    return(
        <>
            <h2>Flights page</h2>
            <ul>
                {items}
            </ul>
        </>
    )
}

export default FlightsPage;