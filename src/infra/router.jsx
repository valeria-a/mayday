import {createBrowserRouter} from 'react-router-dom'
import FlightsPage from '../flights/FlightsPage/FlightsPage'
import App from '../App'
import OrdersPage from '../orders/OrdersPage/OrdersPage'
import LoginPage from '../auth/LoginPage/LoginPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <FlightsPage />
            },
            {
                path: '/flights',
                element: <FlightsPage />
            },
            {
                path: '/my_orders',
                element: <OrdersPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
        ]
    }
])