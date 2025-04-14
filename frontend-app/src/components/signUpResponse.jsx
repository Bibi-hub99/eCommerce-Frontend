import { TiTick } from "react-icons/ti";
import { MdClear } from "react-icons/md";
import {Link} from 'react-router-dom'

function SignUpResponse(props){
    const isSuccess = props.isSuccessful
    console.log(isSuccess)

    const responseMessage = isSuccess ? 'Account Successful':'Account Failed'
    const responseSticker = isSuccess ? <TiTick className={'!inline'}/>:<MdClear className={'!inline'}/>
    return (
        <div  className={'text-center'}>
            <div className={`border-[10px] w-[320px] h-[320px] m-auto p-10 rounded-[50%] ${!isSuccess ? 'border-red-600':'border-green-600'}`}>
                <h1 className={'text-2xl'}>{responseMessage}</h1>
                <p className={`text-9xl ${isSuccess ? 'text-green-600':'text-red-600'}`}>{responseSticker}</p>
                <br></br>
                <Link to={`${!isSuccess ? '.':'/log-in'}`} className={`${!isSuccess ? 'bg-red-600':'bg-green-600'} text-white py-3 px-5 rounded-md`} onClick={props.tryAgain}> {!isSuccess ? 'Try Again':'Go to Log In'}</Link>
            </div>
        </div>
    )

}

export default SignUpResponse