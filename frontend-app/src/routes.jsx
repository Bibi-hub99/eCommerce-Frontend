import {createBrowserRouter} from 'react-router-dom'
import {Suspense,lazy} from 'react'
import Home from './pages/home'
import Layout from "./layout"
import {fetchBuyerProducts} from "./CRUD/httpRequests"
import axios from "axios"

import ViewProduct from './buyer-components/viewProduct'

const LazyLogIn = lazy(()=>import("./pages/logInPage"))
const LazySignUp = lazy(()=>import("./pages/signUpPage"))
const LazySellerLayout = lazy(()=>import("./seller-components/sellerLayOut"))
const LazyLoggedUser = lazy(()=>import("./buyer-components/logged-user"))
const LazySellerIndex = lazy(()=>import("./seller-components/storeIndex"))
const LazyStore = lazy(()=>import("./seller-components/categoryRouting"))
const LazyAddProduct = lazy(()=>import("./seller-components/addProdsForm"))
const BuyerMenu = lazy(()=>import("./buyer-components/menu"))

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
                        path:'menu',
                        loader:fetchBuyerProducts,
                        element:(
                            <Suspense fallback={<div className={'text-5xl'}>Loading...</div>}>
                                <BuyerMenu/>
                            </Suspense>
                        ),
                    },
                    {
                        path:'menu/:id',
                        element:<ViewProduct/>
                    },
                    {
                        path:'favorites',
                        element:<h1>Favorites</h1>
                    },
                    {
                        path:'cart',
                        element:<h1>Cart</h1>
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
                loader:async()=>{
                    try{
                        const user = JSON.parse(localStorage.getItem('logged_in'))
                        const {data} = await axios.get(`http://localhost:5000/store/${user.userID}`)
                        return data
                    }catch(err){
                        console.log(err)
                        return 'error'
                }
                },
                element:(
                    <Suspense fallback={<div className={'text-5xl'}>Loading...</div>}>
                        <LazySellerIndex/>
                    </Suspense>
                )
            },
            {
        
                path:'categories/:category',
                element:(
                <Suspense fallback={<div className={'text-5xl'}>Loading...</div>}>
                        <LazyStore/>
                </Suspense>
                )
        
            },
            {
                path:'add-items',
                element:(
                    <Suspense fallback={<div className={'text-5xl'}>Loading...</div>}>
                        <LazyAddProduct/>
                    </Suspense>
                )
            },
            {
                path:'notifications',
                element:<h1>NOTIFICATIONS</h1>
            },
            {
                path:'account',
                element:<h1>ACCOUNT</h1>
            },
        ]
    },

])

export default routes