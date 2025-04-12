import LogInForm from '../components/logInForm'
import {useState} from 'react'
import BlackNavBar from '../components/blackNavBar'
import HistoryBackBtn from '../components/historyBackBtn'
function LogInPage(){

    //login page which renders the log in form imported

    const [userCredentials,setUserCredentials] = useState({
        username:'',
        password:'',
        showPassword:false,
        userType:'',
    })

    const handleChange = (evt)=>{
        const {name,value,type,checked} = evt.target
        setUserCredentials((oldValue)=>{
            return{
                ...oldValue,
                [name]:type === 'checkbox' ? checked:value
            }
        })
    }


    console.log(userCredentials)

    return (
        <div>
            <BlackNavBar/>
            <div className={'mt-5'}>
                {/*
                 button below triggers the history back method of the browser
                 */}
                 <HistoryBackBtn/>
                <form name={'logInForm'} autoComplete='off'>
                    <LogInForm handleChange={handleChange}
                    formTitle={'Enter your log in details'} 
                    isChecked={userCredentials.showPassword} 
                    inputType1={'text'}
                    inputName1={'username'}
                    inputValue1={userCredentials.username}
                    inputPlaceholder1={'Username'}
                    inputName2={'password'}
                    inputValue2={userCredentials.password}
                    inputPlaceholder2={'Password'}/>
                </form>

            </div>
        </div>
    )

}

export default LogInPage