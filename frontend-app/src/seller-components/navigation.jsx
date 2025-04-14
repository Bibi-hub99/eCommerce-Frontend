import DivTag from '../components/divTag'
import EatMoreHero from '../components/eatMoreHero'
import Button from '../components/rawButton'
import SearchForm from '../components/searchForm'
import { FaStore } from "react-icons/fa";
import {useMyContext} from '../contextAPI'
import {NavLink} from 'react-router-dom'

function SellerNav(props){

    const {menuBars,sellerLinks} = useMyContext()

    const styleDiv = {
        padding:'1rem 0',
        width:'100%',
        position:'fixed',
        top:'0'
    }

    return (
            <DivTag divStyle={styleDiv}>
                <div className={'w-[98%] m-auto flex items-center'}>
                    <div className={'block md:hidden'}>
                        <Button
                        display={'block'}
                        fontSize={'20px'}
                        type={'button'}
                        padding={'1px 0 0 0'}
                        handleClick={props.handleClick}
                        innerText={menuBars}
                        />
                    </div>
                    <div className={'ml-2'}>
                        <EatMoreHero/>
                    </div>
                    <div>
                        <SearchForm marginLeft={'10px'} marginT={'1'}/>
                    </div>
                    <div className={'hidden md:block ml-2 pl-5 box-border text-3xl'}>
                        <ul className={'flex items-center'}>
                            <li className={''}><NavLink to={`.`} className={({isActive}) => isActive ? 'text-green-700':''} end><FaStore/></NavLink></li>
                            {sellerLinks.map((each)=>{
                                return <li key={`sellerLinks${each.id}`} className={''} style={{marginLeft:'2.5rem'}}><NavLink to={each.url} className={({isActive}) => isActive ? 'text-green-700':''}>{each.title}</NavLink></li>
                            })}
                        </ul>
                    </div>
                </div>
            </DivTag>
    )


}

export default SellerNav