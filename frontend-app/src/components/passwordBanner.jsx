function PassBanner(props){

    return (
        <div className={'w-full p-5 box-border'} style={{boxShadow:'3px 5px 10px lightgray'}}>
            <p>Password must have the following:</p>
            <p className={'invalid'} id={'upperLogic'}>One uppercase letter</p>
            <p className={'invalid'} id={'lowerLogic'}>One lowercase letter</p>
            <p className={'invalid'} id={'digitLogic'}>At least one digit</p>
            <p className={'invalid'} id={'lengthLogic'}>8 minimum number of characters</p>
        </div>
    )

}

export default PassBanner