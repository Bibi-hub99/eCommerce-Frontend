import {Outlet} from "react-router-dom"
import SellerNav from "./navigation"
import SlideMenu from "../components/slideMenu"
import MobileLink from "../components/mobileLink"
import {useState} from "react"
import {useMyContext} from "../contextAPI"
import { FaStore } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

function SellerLayout(){

    const [width,setWidth] = useState("0%")
    const {sellerLinks} = useMyContext()

    const linkStyle = {
        display:'block',
        fontSize:'1.5rem',
        padding:'.8rem',
        boxSizing:'border-box',
        width:'97%',
        margin:'auto',
        borderRadius:'.5rem'
    }

    const normalLink = 'hover:bg-gray-400'
    const activeLink = 'bg-black text-white'

    const indexLink = <NavLink to={'.'} end style={linkStyle} className={({isActive})=>isActive ? activeLink:normalLink} onClick={()=>setWidth('0%')}>{<FaStore/>}</NavLink>

    const mobileLinksMap = sellerLinks.map((each)=>{
        return (
            <MobileLink key={`sellerLinks${each.id}`} url={each.url} title={each.title} handleClick={()=>setWidth('0%')}/>
        )
    })

    return (
        <div>
            <SellerNav handleClick={()=>setWidth('50%')}/>
            <Outlet/>
            <SlideMenu width={width} handleClick={()=>setWidth('0')} navLinks={mobileLinksMap} indexLink={indexLink}/>
        </div>
    )

}

export default SellerLayout