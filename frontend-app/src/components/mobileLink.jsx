
import {NavLink} from 'react-router-dom'

function MobileLink(props){

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

    return (
        <NavLink className={({isActive}) => isActive ? activeLink:normalLink} style={linkStyle} to={props.url} onClick={props.handleClick}>{props.title}</NavLink>
    )

}

export default MobileLink