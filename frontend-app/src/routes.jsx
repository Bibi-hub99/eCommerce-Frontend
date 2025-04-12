import {createBrowserRouter} from 'react-router-dom'
import {Suspense,lazy} from 'react'
import Home from './pages/home'
import Layout from "./layout"

const LazyLogIn = lazy(()=>import("./pages/logInPage"))
const LazySignUp = lazy(()=>import("./pages/signUpPage"))

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
    },
    {
        path:'log-in',
        element:(
            <Suspense fallback={<div className={'text-5xl'}>Loading</div>}>
                <LazyLogIn/>
            </Suspense>
        )
    },
    {
        path:'sign-up',
        element:(
            <Suspense fallback={<div className={'text-5xl'}>Loading</div>}>
                <LazySignUp/>
            </Suspense>
        )
    }
])

export default routes