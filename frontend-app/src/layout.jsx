import {Outlet,useMatch,useLocation,NavLink} from 'react-router-dom'
import {useState} from "react"
import Navigation from './components/navigation'
import SlideMenu from './components/slideMenu'
import {useMyContext} from "./contextAPI"
import MobileLink from './components/mobileLink'


function Layout(){

    const {navLinks,foodMenu} = useMyContext()
    const [width,setWidth] = useState('0%')
    const matchPath = useMatch('/')
    const location = useLocation()

    let isHome;
    if(matchPath){
        isHome = !true
    }else{
        isHome = !false
    }

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

    const indexLink = <NavLink to={`logged-buyer`} style={linkStyle} className={({isActive}) => isActive ? activeLink:normalLink} end onClick={()=>setWidth('0%')}>{foodMenu}</NavLink>


    const mobileLinksMap = navLinks.map((each)=>{
        return(
            <MobileLink key={`buyerLinks${each.id}`} url={`logged-buyer/${each.url}`} title={each.title} handleClick={()=>setWidth('0%')}/>
        )
    })

    return (
        <div className={'w-full'}>
            <Navigation isHome={isHome} handleClick={()=>setWidth('50%')}/>
            <div>
                <Outlet/>
            </div>
            <SlideMenu width={width} handleClick={()=>setWidth('0%')} navLinks={mobileLinksMap} indexLink={indexLink}/>
        </div>
    )

}

export default Layout