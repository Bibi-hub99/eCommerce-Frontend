import {createBrowserRouter} from 'react-router-dom'
import {Suspense,lazy} from 'react'
import Home from './pages/home'
import Layout from "./layout"


const LazyLogIn = lazy(()=>import("./pages/logInPage"))
const LazySignUp = lazy(()=>import("./pages/signUpPage"))
const LazySellerLayout = lazy(()=>import("./seller-components/sellerLayOut"))
const LazyLoggedUser = lazy(()=>import("./buyer-components/logged-user"))

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
                path:'logged-buyer',
                element:(
                    <Suspense fallback={<div className={'text-5xl'}>Loading...</div>}>
                        <LazyLoggedUser/>
                    </Suspense>
                ),
                children:[

                    {
                        path:'favorites',
                        element:<h1>Favorites</h1>
                    },
                    {
                        path:'cart',
                        element:<h1>Cart</h1>
                    },
                    {
                        path:'notifications',
                        element:<h1>Notifications</h1>
                    },
                    {
                        path:'account',
                        element:<h1>Account</h1>
                    }

                ]
                
            },
    
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
    },
    {
        path:'store',
        element:(
            <Suspense fallback={<div className={'text-5xl'}>Loading....</div>}>
                <LazySellerLayout/>
            </Suspense>
            ),
        children:[
            {
                index:true,
                element:<h1>INDEX</h1>
            },
            {
                path:'add-items',
                element:<h1>ADD ITEMS</h1>
            },
            {
                path:'notifications',
                element:<h1>NOTIFICATIONS</h1>
            },
            {
                path:'account',
                element:<h1>ACCOUNT</h1>
            }
        ]
    }
])

export default routes