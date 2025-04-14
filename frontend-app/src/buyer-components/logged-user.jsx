import {Outlet} from 'react-router-dom'

function LoggedUser(){


    return (
        <div>
            <h1>LOGGED USER</h1>
            <Outlet/>
        </div>
    )

}

export default LoggedUser