import {Outlet} from "react-router-dom"
import SellerNav from "./navigation"

function SellerLayout(){

    return (
        <div>
            <SellerNav/>          
            <Outlet/>
        </div>
    )

}

export default SellerLayout