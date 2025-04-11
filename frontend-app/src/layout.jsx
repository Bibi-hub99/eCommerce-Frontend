import {Outlet,useMatch} from 'react-router-dom'
import Navigation from './components/navigation'

function Layout(){

    const matchPath = useMatch('/')

    let isHome;
    if(matchPath){
        isHome = !true
    }else{
        isHome = !false
    }

    return (
        <div className={'w-full'}>
            <Navigation isHome={isHome}/>
            <div>
                <Outlet/>
            </div>
        </div>
    )

}

export default Layout