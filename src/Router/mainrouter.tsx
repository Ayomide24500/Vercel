import {createBrowserRouter} from "react-router-dom"
import Layout from "../common/Layout"
import Body from "../Pages/Body"
import Contact from '../Pages/Contact'


export const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Body />
            }
        ]
    },{
        path: '/genre-page',
        element: <Contact />
    }
])
