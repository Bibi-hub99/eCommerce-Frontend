import {useMyContext} from '../contextAPI'

function SearchForm(props){

    const {searchIcon} = useMyContext()

    return (
        <form name='searchForm' autoComplete={'off'} className={'block'} style={{marginLeft:props.marginLeft}}>
            <input type={'text'} value={props.searchInput} name={'searchInput'} className={`border-solid border-2 border-black inline w-[80%] py-1 rounded-md ${props.padSide ? 'px-0':'px-5'} ${props.marginT ? 'mt-1':'mt-0'}`}></input>
            <label className={'w-[15%] ml-1 bg-black inline-block text-center py-1 border-2 border-black text-white rounded-md'} onClick={props.handleSearch}>{searchIcon}</label>
        </form>
    )

}

export default SearchForm