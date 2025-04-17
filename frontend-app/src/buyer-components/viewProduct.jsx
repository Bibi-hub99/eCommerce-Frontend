import {useParams,NavLink} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {fetchSingleProduct} from "../CRUD/httpRequests"
import numeral from 'numeral'
import { FaThumbsUp } from "react-icons/fa";

function SlideImage(props){

    return (

        <div className={'w-[24%] h-[100px]'}>
            <img src={props.img} className={'h-full rounded-xl cursor-pointer'} onClick={props.handleClick}></img>
        </div>
    )

}

function ViewProduct(props){

    const {id} = useParams()
    const [viewProduct,setViewProduct] = useState({
        product_name:'',
        product_main_image:''
    })
    const [imageDisplay,setImageDisplay] = useState("")

    useEffect(()=>{
        const findProduct = async()=>{
            try{
                const product = await fetchSingleProduct(id)
                setViewProduct(product)
                setImageDisplay(viewProduct.product_main_image)
            }catch(err){
                console.log(err)
            }
        }
        findProduct()
    },[])


    if(viewProduct.product_name === ''){
        return (
            <div>Loading...</div>
        )
    }

    const priceFormat = numeral(viewProduct.product_price).format("0,0.00")

    return (
        <div className={'mt-24'}>
            <div className={'flex flex-col md:flex-row'}>
                <div className={'md:w-[50%]'}>
                    <div className={'w-[95%] ml-[2.5%]'}>
                        <img src={imageDisplay} className={'rounded-xl w-full'}></img>
                        <br></br>
                        <div className={'flex justify-between'}>
                            <SlideImage img={viewProduct.product_main_image} handleClick={()=>setImageDisplay(viewProduct.product_main_image)}/>
                            <SlideImage img={viewProduct.product_imageURL2} handleClick={()=>setImageDisplay(viewProduct.product_imageURL2)}/>
                            <SlideImage img={viewProduct.product_imageURL3} handleClick={()=>setImageDisplay(viewProduct.product_imageURL3)}/>
                            <SlideImage img={viewProduct.product_imageURL4} handleClick={()=>setImageDisplay(viewProduct.product_imageURL4)}/>
                        </div>
                        <br></br>
                        <h2 className={'text-3xl'}>Product Information</h2>
                    </div>
                </div>
                <div className={'pt-10 w-full hidden md:block md:w-[50%]'}>
                    <div className={'border-2 md:w-[80%] rounded-lg px-5 box-border py-5'}>
                        <h2 className={'text-2xl'}>{viewProduct.product_name}</h2>
                        <h2 className={'text-2xl'}>R{priceFormat}</h2>
                        <div>
                            <textarea className={'w-[90%] block border-2 resize-none mt-4 rounded-lg indent-1 outline-none'} placeholder={'Add Review'} rows={'4'}></textarea>
                            <button className={'bg-green-500 mt-3 py-2 px-5 rounded-lg'}>Add Review</button><br></br>
                            <button className={'text-3xl mt-4'}><FaThumbsUp/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ViewProduct