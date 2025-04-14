import DivTag from '../components/divTag'
import EatMoreHero from '../components/eatMoreHero'
import ButtonLink from '../components/buttonLinks'
import Button from './rawButton'
import SearchForm from './searchForm'
import {useMyContext} from '../contextAPI'
import {NavLink,useLocation} from 'react-router-dom'
//these are the imports into this file which I used as a home page


function Navigation(props){

    const {loggingLinks,menuBars,navLinks,foodMenu} = useMyContext()//destructuring logging links from the contextAPI to use as log in and sign up

    const location = useLocation()
    console.log(location)

    const loggingMaps = loggingLinks.map((each)=>{
        //mapping loggingLinks to create Link ButtonLink for each element,logging links is an array in contextAPI
       return <ButtonLink
        key={`loggingLinks${each.id}`} 
        url={`${each.url}`} 
        title={each.title} 
        marginRight={each.url === 'log-in'?'1rem':''} 
        bgColor={each.url === 'log-in' ? 'white':'black'} 
        color={each.url === 'log-in' ? 'black':'white'}
        padding={'.4rem .5rem'}
        radius={'1rem'}/>
    })

    const navLinkStyle = {
        display:'inline-block',
        padding:'.2rem .5rem',
        fontSize:'1.8rem',
        marginTop:'2px',
        borderRadius:'10px'
    }

    return (

        //fixed top-0

        <DivTag>
            <div className={'bg-white  w-full z-20'} style={{boxShadow:'2px 4px 2px lightgray'}}>
                <div className={'py-3 box-border w-[98%] m-auto flex items-center'}>
                    {props.isHome && <div className={`md:hidden`}>
                        <Button
                        innerText={menuBars}
                        display={'block'}
                        fontSize={'1.5rem'}/>
                    </div>}
                    <div className={`${props.isHome ? 'ml-2':'ml-0'}`}>
                        <EatMoreHero/>{/**imported and is just a text which I used as a hero for my web app */}
                    </div>
                    {props.isHome && <div className={` w-[50%] md:w-[30%] ${props.isHome ? 'ml-2':'ml-0'}`}>
                        <SearchForm/>
                    </div>}
                    {props.isHome && <div className={'hidden md:block w-[49%] ml-1'}>
                        <ul className={'flex'}>
                            <li className={'py-1 px-5 inline-block'}><NavLink to={'logged-buyer'} style={navLinkStyle} className={({isActive}) => isActive ? "bg-red-500":""} end>{foodMenu}</NavLink></li>
                            {navLinks.map((each)=>{
                                return <li key={`navLinks${each.id}`} className={'ml-[5px] inline-block py-1 px-3'}><NavLink to={`logged-buyer/${each.url}`} style={navLinkStyle} className={({isActive}) => isActive ? "bg-red-500":""}>{each.title}</NavLink></li>
                            })}
                        </ul>
                    </div>}
                    {!props.isHome && <div className={'ml-auto mr-16'}>
                        {loggingMaps}
                    </div>}
                </div>
            </div>
        </DivTag>

    )

}

export default Navigation