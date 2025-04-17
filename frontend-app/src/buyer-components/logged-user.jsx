import {Outlet} from 'react-router-dom'

function LoggedUser(){

    return (
        <div>
            <Outlet/>
        </div>
    )

}

export default LoggedUser