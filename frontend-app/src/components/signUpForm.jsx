import {useState} from "react"
import Button from './rawButton'
import PassBanner from './passwordBanner'

function SignUpForm(props){

    const inputClass1 = 'bg-gray-200 py-3 w-full rounded-md indent-1'
    const inputClass2 = {
        fontSize:'19px'
    }

    return (
        <div className={'w-[90%] m-auto max-w-[500px] bg-white shadow-xl p-5'}>
            <form name='signUpForm' autoComplete={'off'}>
                {props.step1State && <div>
                    <h2 className={'text-2xl my-3'}>Enter your details</h2>
                    <div className={'flex'}>
                        <Button bgColor={'green'} marginLeft={'auto'} innerText={'Forwad'} color={'white'} padding={'.5rem 1rem'} radius={'10px'} type={'button'} handleClick={props.handleNextStep}/>
                    </div>
                    <br></br>
                    <input type={'email'} name={'email'} value={props.emailValue} placeholder={'Email'} className={inputClass1} onChange={props.handleChange}></input>
                    <br></br>
                    <br></br>
                    <input type={'tel'} name={'telephone'} value={props.telephoneValue} placeholder={'Telephone'} className={inputClass1} onChange={props.handleChange}></input>
                </div>}
                {props.step2State && <div>
                    <h2 className={'text-2xl my-3'}>Enter Your Credentials</h2>
                    <div>
                        <Button marginLeft={'0'} bgColor={'tomato'} innerText={'Back'} color={'white'} padding={'.5rem 1rem'} radius={'10px'} type={"button"} handleClick={props.handlePrevStep}/>
                    </div>
                    <br></br>
                    <input type={'text'} name={'username'} value={props.usernameValue} placeholder={'Username'} className={inputClass1} onChange={props.handleChange}></input>
                    <br></br>
                    <br></br>
                    <input type={props.isChecked ? 'text':'password'} name={'password'} value={props.passwordValue} placeholder={'Password'} className={inputClass1} onChange={props.handleChange}onFocus={props.showBanner} onBlur={props.hideBanner} onKeyUp={props.handlePassTrack}></input>
                    <div className={`relative ${props.bannerShow === true ? 'block':'hidden'}`}>
                        <br></br>
                        <PassBanner/>
                    </div>
                    <div className={'mt-5'}>
                        <input type={'checkbox'} name={'showPassword'} id={'showPass'} onChange={props.handleChange}></input>
                        <label htmlFor={'showPass'}> Show Password</label>
                    </div>
                    <div className={'text-start'}>
                        <input type="radio" className={''} style={inputClass2} name={'userType'} id={'buyer'} value={'buyer'} onChange={props.handleChange}></input>
                        <label className={''} style={inputClass2} htmlFor={'buyer'}> Buyer </label>
                        <input type={'radio'} className={''} name={'userType'} style={inputClass2} id={'seller'} value={'seller'} onChange={props.handleChange}></input>
                        <label className={''} style={inputClass2} htmlFor={'seller'}> Seller</label>
                        <br></br>
                        <br></br>
                        <button type={'submit'} onClick={props.handleContinue} className={'bg-black w-full p-3 rounded-lg text-white'}>continue</button>
                    </div>
                </div>}
            </form>
        </div>
    )

}

export default SignUpForm