import {createBrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Layout from "./layout"

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/menu',
                element:<h1>Menu</h1>
            }
        ]
    }
])

export default routes