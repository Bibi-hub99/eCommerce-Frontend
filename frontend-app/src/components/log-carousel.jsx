import {Link} from 'react-router-dom'

function LogCarousel(props){

    return(
        <div className={'w-full bg-black text-white py-16 text-center'}>
            <h2 className={'text-2xl'}>Want to Start making orders or adding your products to sell ? Log in Now<span></span></h2>
            <br></br>
            <Link to={'/log-in'} className={'bg-white text-black px-7 py-3 rounded-full'}>Log In</Link>
        </div>
    )

}

export default LogCarousel