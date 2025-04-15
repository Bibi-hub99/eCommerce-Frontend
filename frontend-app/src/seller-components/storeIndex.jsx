import CategorySlider from './categoriesSlider'
import {useState} from "react"
import {useMyContext} from "../contextAPI"

function StoreIndex(){

    const {sorterRadios} = useMyContext()
    const [sorter,setSorter] = useState("default")

    const sortProducts = (evt)=>{
        const {value} = evt.target;
        setSorter(value)
    }
    console.log(sorter)

    return (
        <div>
            <CategorySlider/>
            <div className={'mt-36 md:mt-32 w-[98%] m-auto'}>
                <form>
                    <ul className={'flex'}>
                        {
                            sorterRadios.map((each)=>{
                                return (
                                <li key={`sorterLinks${each.id}`} className={`${each.id !== 1 ? 'ml-2':''}`}>
                                    <input type={'radio'} name={each.name} value={each.value} id={each.value} onChange={sortProducts}></input>
                                    <label htmlFor={each.value} className={'capitalize'}> {each.title}</label>
                                </li>)
                            })
                        }
                    </ul>
                </form>
            </div>
        </div>
    )

}

export default StoreIndex