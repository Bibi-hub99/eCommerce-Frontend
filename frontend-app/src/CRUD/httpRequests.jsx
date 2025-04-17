import axios from 'axios'
const baseURL = 'http://localhost:5000'
const storeURL = 'store'
import {defer} from "react-router-dom"

export const signUpPost = async ({email,telephone,username,password,userType})=>{
    try{
        const {data} = await axios.post(`${baseURL}/sign-up`,
            {email,telephone,username,password,userType}
        )
        return data
        
    }catch(err){
         console.log(err)
    }

}

export const logIn = async({username,password,userType})=>{
    try{
        const {data} = await axios.post(`${baseURL}/log-in`,{
            username,
            password,
            userType
        })
        return data
    }catch(err){
        console.log(err)
    }
}

export const addProduct = async(
    {
    sellerID,
    product_name,product_price,product_category,
    product_description,product_tags,product_in_stock,
    product_available,product_on_sale,product_prev_price,
    product_main_image,product_imageURL2,product_imageURL3,
    product_imageURL4,product_date_relevance,product_delivery,product_pickUp
}
)=>{
    try{
        const response = await axios.post(`${baseURL}/${storeURL}/add-items`,{
            sellerID,
            product_name,product_price,product_category,
            product_description,product_tags,product_in_stock,
            product_available,product_on_sale,product_prev_price,
            product_main_image,product_imageURL2,product_imageURL3,
            product_imageURL4,product_date_relevance,product_delivery,product_pickUp
        })
        console.log(response)
        return response

    }catch(err){
        console.log(err)
    }
}

export const fetchBuyerProducts = async()=>{
    try{
        const {data} = await axios.get(`${baseURL}/logged-buyer/menu`)
        return data
    }catch(err){
        console.log(err)
    }
}

export const fetchSingleProduct = async(productID)=>{
    try{
        const {data} = await axios.get(`${baseURL}/logged-buyer/menu/${productID}`)
        return data
    }catch(err){
        console.log(err)
    }
}