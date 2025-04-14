import LogInForm from '../components/logInForm'
import {useState} from 'react'
import BlackNavBar from '../components/blackNavBar'
import HistoryBackBtn from '../components/historyBackBtn'
import {logIn} from '../CRUD/httpRequests'
import {useNavigate} from 'react-router-dom'

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

    const credentialsValidator = ()=>{
        const {username,password,userType} = userCredentials
        try{
            if(username.trim()=="" || password.trim() ==""){
                throw "fill all the details"
            }else if(userType.trim()==""){
                throw "select user type"
            }
            else{
                return true
            }
        }catch(err){
            alert(err)
            return false
        }
    }

    const navigate = useNavigate()

    const handleLogIn = async(evt)=>{
        evt.preventDefault()
        try{
            const {username,password,userType} = userCredentials
            if(credentialsValidator()){
                const response = await logIn({
                    username,
                    password,
                    userType
                })
                setUserCredentials({
                    username:'',
                    password:'',
                    showPassword:false,
                    userType:''
                })
                const userRadio = document.getElementsByName('userType')
                for(let i=0;i<userRadio.length;i++){
                    userRadio[i].checked = false
                }
                if(typeof(response) === 'object'){
                    if(response.userType === 'buyer'){
                        navigate("/logged-buyer")
                    }else{
                        navigate("/store")
                    }
                }
                
            }
        }catch(err){
            console.log(err)
        }
    }

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
                    handleContinue={handleLogIn}
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