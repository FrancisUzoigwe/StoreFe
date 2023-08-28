import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import MainPage from "../page/MainPage"
import CheckoutPage from "../page/CheckoutPage"
import DetailedPage from "../page/DetailedPage"

export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "/check",
                element: <CheckoutPage/>
            },
            {
                path: "/detail",
                element: <DetailedPage/>
            }
        ]
    }
])