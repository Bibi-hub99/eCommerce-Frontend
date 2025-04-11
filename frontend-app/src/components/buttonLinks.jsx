import {Link} from 'react-router-dom'


function ButtonLink(props){

    {/*
        component which return a link tag I will reuse in the home page to create log in and sign up navigations to
    */}

    return (
        <Link to={props.url}
        style={{
            backgroundColor:props.bgColor,
            color:props.color,
            marginRight:props.marginRight,
            padding:props.padding,
            borderRadius:props.radius,
            boxShadow:'3px 5px 10px lightgray'}}>
            {props.title}
            </Link>
    )
    
}

export default ButtonLink