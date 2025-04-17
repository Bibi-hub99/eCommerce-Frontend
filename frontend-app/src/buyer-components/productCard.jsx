import {NavLink} from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import numeral from "numeral"

function ProductCard(props){

    const priceFormat = numeral(props.price).format("0,0.00")
    const prevPriceFormat = numeral(props.prevPrice).format("0,0.00")
    return (
        <div className={'border-2 font-medium relative pb-5 rounded-md'}>
            <NavLink to={props.productURL}>
                <div className={'h-[200px]'}>
                    <img src={props.image} className={'w-full h-full rounded-t-md'}></img>
                </div>
            </NavLink>    
            <div className={'w-[95%] m-auto'}>
                <p>{props.name}</p>
                <p className={'mt-1'}>R{priceFormat}</p>
                <p className={'text-red-600'}>not available</p>
                <button className={'border-2 py-2 rounded-lg w-full'}>Add</button>
            </div>
            <p className={'font-light absolute top-0 left-2'}><del>was {prevPriceFormat}</del></p>
            <p className={'absolute right-1 top-1 inline cursor-pointer'} style={{fontSize:'1.5rem'}}><FaRegHeart/></p>
        </div>
    )

}

export default ProductCard