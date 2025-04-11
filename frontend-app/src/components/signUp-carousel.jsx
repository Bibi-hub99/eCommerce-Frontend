import {Link} from 'react-router-dom'

function SignUpCarousel(){

    return (
        <div className={'w-full bg-gray-100 text-black py-16 text-center'}>
            <h2 className={'text-2xl'}>Don't have an account ? do not worry create one to start ordering,getting rewards and doing more</h2>
            <br></br>
            <Link to={'/sign-up'} className={'bg-black text-white px-7 py-3 rounded-full'}>Sign Up</Link>
        </div>
    )

}

export default SignUpCarousel