import CategorySlider from './categoriesSlider'
import {useState} from "react"
import {useMyContext} from "../contextAPI"
import {useLoaderData} from "react-router-dom"

function StoreIndex(){

    const response = useLoaderData()
    const {sorterRadios} = useMyContext()
    const [sorter,setSorter] = useState("default")
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("logged_in")))

    console.log(response)

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