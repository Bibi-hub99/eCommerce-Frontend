import {useMyContext} from '../contextAPI'


function HistoryBackBtn(){

    const {backIcon} = useMyContext()//destructuring back arrow Icon from context to use as an inner text of the navigation to back
    

    const historyBack = ()=>{
        window.history.back()
    }

    return(
        <button className={'ml-2 text-2xl bg-black py-2 px-5 rounded-lg text-white'} title={'go back'} onClick={historyBack}>{backIcon}</button>
    )

}

export default HistoryBackBtn