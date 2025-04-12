import {Link} from 'react-router-dom'

function LogInForm(props){

    //login form for entering and submittin credentials to the database and route to logged user page if successful

    const inputClass1 = 'bg-gray-200 py-3 w-full rounded-md indent-1'
    const inputClass2 = {
        fontSize:'19px'
    }

    return (
        <div className={'w-[90%] m-auto max-w-[500px] bg-white shadow-2xl p-5'}>
            <h2 className={'text-2xl my-3'}>{props.formTitle}</h2>
            <br></br>
            <input type={props.inputType1} name={props.inputName1} value={props.inputValue1} placeholder={props.inputPlaceholder1} className={inputClass1} onChange={props.handleChange}></input>
            <br></br>
            <br></br>
            <input type={props.isChecked ? 'text':'password'} name={props.inputName2} value={props.inputValue2} placeholder={props.inputPlaceholder2} className={inputClass1} onChange={props.handleChange}></input>
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
                <button type={'submit'} className={'bg-black w-full p-3 rounded-lg text-white'}>continue</button>
            </div>
        </div>
    )

}

export default LogInForm