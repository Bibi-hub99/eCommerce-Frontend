import {useMyContext} from '../contextAPI'

function SearchForm(props){

    const {searchIcon} = useMyContext()

    return (
        <form name='searchForm' autoComplete={'off'} className={'block'}>
            <input type={'text'} value={props.searchInput} name={'searchInput'} className={'border-solid border-2 border-black inline w-[80%] py-1 rounded-md'}></input>
            <label className={'w-[15%] ml-1 bg-black inline-block text-center py-1 border-2 border-black text-white rounded-md'}>{searchIcon}</label>
        </form>
    )

}

export default SearchForm