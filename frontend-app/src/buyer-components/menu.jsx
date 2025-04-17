import {useLoaderData} from "react-router-dom"
import {useState} from "react"
import ProductCard from "./productCard"

function Menu(){

    const response = useLoaderData()
    const [products,setProducts] = useState(response || [])
    console.log(products)

    const productMaps = typeof(products) === "object" ? products.length > 0 ? products.map((each)=>{
        return (
            <ProductCard 
            key={`prods${each._id}`} 
            image={each.product_main_image} 
            name={each.product_name}
            price={each.product_price}
            productURL={each._id}
            />
        )
    }):<h2>No Products...</h2>:<h2>No products...</h2>

    return (
        <div className={'mt-20'}>
            <div className={'w-[98%] m-auto'}>
                <div className={'grid grid-cols-2 gap-2 md:grid-cols-3'}>
                    {productMaps}
                </div>
            </div>
        </div>
    )

}

export default Menu