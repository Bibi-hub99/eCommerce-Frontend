import BlackNavBar from '../components/blackNavBar'
import HistoryBackBtn from '../components/historyBackBtn'
import SignUpForm from "../components/signUpForm"
import { useState} from 'react'
import {signUpPost} from '../CRUD/httpRequests'
import SignUpResponse from '../components/signUpResponse'
import axios from 'axios'

function SignUpPage(){

    const [userSignUpData,setUserSignUpData] = useState({
        email:'',
        telephone:'',
        username:'',
        password:'',
        showPassword:false,
        userType:''
    })  

    const [step1State,setStep1State] = useState(true)
    const [step2State,setStep2State] = useState(false)
    const [passFocused,setPassFocused] = useState(false)
    const [formState,setFormState] = useState(true)
    const [responseState,setResponseState] = useState(false)
    const [postResponse,setPostResponse] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    
    const handleNextStep = ()=>{

        function emailValidator(){
            try{
                if(userSignUpData.email.trim()==""){
                    throw 'enter valid email address'
                }else if(!userSignUpData.email.endsWith('@gmail.com')){
                    throw 'enter valid email address must include @gmail.com'
                }else {
                    return true
                }
            }catch(err){
                alert(err)
                return false;
            }
        }

        function telephoneValidator(){
            try{

                if(userSignUpData.telephone.match(/[a-z]/g) || userSignUpData.telephone.match(/[A-Z]/g)){
                    throw "telephone must have only numbers not alphabets"
                }
                else if(userSignUpData.telephone.trim() == ""){
                    throw "enter telephone number"
                }

                else if(!userSignUpData.telephone.startsWith(0)){
                    throw "telephone must begin with 0"
                }

                else if(userSignUpData.telephone.length < 10 || userSignUpData.telephone.length > 10){
                    throw "telephone must have 10 digits"
                }

                else{
                    return true
                }
            }catch(err){
                alert(err)
                return false
            }
        }

        if(emailValidator() && telephoneValidator()){
            setStep1State(false)
            setStep2State(true)
        }

    }

    function userNameValidator(){

        try{
            if(userSignUpData.username.trim() ===''){
                throw "fill in the username"
            }else if(userSignUpData.username.charAt(0).match(/[0-9]/g)){
                throw "username should not begin with a number"
            }else if(userSignUpData.username.length < 4){
                throw "username must have at least 4 letters"
            }else{
                return true
            }

        }catch(err){
            alert(err)
            return false
        }

    }

    function passwordValidator(){
        try{
            const {password} = userSignUpData
            if(password.trim() == ""){
                throw "fill the password field"
            }else if(password.includes(" ")){
                throw "password must not have a space"
            }else if(!password.match(/[a-z]/g) || !password.match(/[A-Z]/g) || !password.match(/[0-9]/g)){
                throw "password must have at least an uppercase letter,lowercase letter and a number"
            }else if(password.length < 8){
                throw "password must have at least 8 characters"
            }else{
                return true
            }
        }catch(err){
            alert(err)
            return false
        }

    }

    function userTypeValidator(){
        try{
            if(userSignUpData.userType === ""){
                throw "select user type"
            }else{
                return true
            }
        }catch(err){
            alert(err)
            return false
        }
    }

    const handlePrevState = ()=>{
        setStep2State(false)
        setStep1State(true)
    }


    const handleContinue = async (evt)=>{

        try{
            evt.preventDefault()
            if(userNameValidator() && passwordValidator() && userTypeValidator()){
                setUserSignUpData({
                    email:'',
                    telephone:'',
                    username:'',
                    password:'',
                    showPassword:'false',
                    userType:''
                })
                const radio = document.getElementsByName('userType')
                for(let i=0;i<radio.length;i++){
                    radio[i].checked = false
                }
     
                const {email,telephone,username,password,userType} = userSignUpData
                setIsLoading(true)
                const response = await signUpPost({
                    email,
                    telephone,
                    username,
                    password,
                    userType
                })
                setIsLoading(false)
                setPostResponse(response)
                setFormState(false)
                setResponseState(true)
            }
                
        }catch(err){
            console.log(err)
        }
    }

    console.log(postResponse)

    const handleChange = (evt)=>{
        const {name,value,type,checked} = evt.target;
        setUserSignUpData((oldValue)=>{
            return {
                ...oldValue,
                [name]:type === 'checkbox' ? checked:value
            }
        })
    }

    const tryAgain = ()=>{
        setResponseState(false)
        handlePrevState()
        setFormState(true)
    }

    const focusPass = ()=>{
        setPassFocused(true)
    }

    const blurPass = ()=>{
        setPassFocused(false)
    }

    const passWordTracking = ()=>{
        const upperLogic = document.getElementById('upperLogic')
        const lowerLogic = document.getElementById('lowerLogic')
        const digitLogic = document.getElementById('digitLogic')
        const lengthLogic = document.getElementById('lengthLogic')

        const {password} = userSignUpData
        if(password.match(/[A-Z]/g)){
            upperLogic.classList.remove('invalid')
            upperLogic.classList.add('valid')
        }else{
            upperLogic.classList.remove('valid')
            upperLogic.classList.add('invalid')
        }

        if(password.match(/[a-z]/g)){
            lowerLogic.classList.remove("invalid")
            lowerLogic.classList.add("valid")
        }else{
            lowerLogic.classList.remove("valid")
            lowerLogic.classList.add("invalid")
        }

        if(password.match(/[0-9]/g)){
            digitLogic.classList.remove("invalid")
            digitLogic.classList.add("valid")
        }else{
            digitLogic.classList.remove("valid")
            digitLogic.classList.add("invalid")
        }

        if(password.length >= 8){
            lengthLogic.classList.remove("invalid")
            lengthLogic.classList.add('valid')
        }else{
            lengthLogic.classList.remove("valid")
            lengthLogic.classList.add("invalid")
        }

    }

    return (
        <div>
            <BlackNavBar/>
            <div className={'mt-5'}>
                {formState && <div>
                    <HistoryBackBtn/>
                    <SignUpForm 
                    step1State={step1State} 
                    step2State={step2State} 
                    handleNextStep={handleNextStep} 
                    handlePrevStep={handlePrevState}
                    handleChange={handleChange}
                    bannerShow={passFocused}
                    showBanner={focusPass}
                    hideBanner={blurPass}
                    handlePassTrack={passWordTracking}
                    handleContinue={handleContinue}
                    emailValue={userSignUpData.email}
                    telephoneValue={userSignUpData.telephone}
                    usernameValue={userSignUpData.username}
                    passwordValue={userSignUpData.password}
                    userType={userSignUpData.userType}
                    isChecked={userSignUpData.showPassword}/>
                </div>}
                {isLoading && <h1>LOADING...</h1>}
                {responseState &&
                            <div className={'h-[80vh] ml-auto overflow-hidden top-[5%] flex flex-col justify-center'}>
                                <div className={''}>
                                    <SignUpResponse isSuccessful={postResponse} tryAgain={tryAgain}/>
                                </div>
                            </div>
                }
            </div>
        </div>
    )

}

export default SignUpPage 