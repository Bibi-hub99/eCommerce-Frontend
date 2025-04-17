import {useState} from 'react'
import { MdOutlineClear } from "react-icons/md";
import {addProduct} from "../CRUD/httpRequests"
import {useMyContext} from "../contextAPI"

function TagComponent(props){

    return (
        <p className={'bg-gray-300 w-[19%] py-2 rounded-md inline overflow-hidden'}><MdOutlineClear className={'inline cursor-pointer hover:bg-white rounded-xl'} onClick={()=>props.handleClick(props.id)}/> {props.name}</p>
    )


}

function AddProductForm(props){

    const [user,setUser] = useState(JSON.parse(localStorage.getItem("logged_in")))

    const [productData,setProductData] = useState({
        sellerID:user.userID,
        product_name:'',
        product_price:'',
        product_category:'',
        product_description:'',
        product_tags:[],
        product_in_stock:'',
        product_available:'',
        product_on_sale:'',
        product_prev_price:'',
        product_main_image:'',
        product_imageURL2:'',
        product_imageURL3:'',
        product_imageURL4:'',
        product_date_relevance:'',
        product_delivery:false,
        product_pickUp:false
    })
    const [tagInput,setTagInput] = useState("")



    const handleTagInput = (evt)=>{
        const {value} = evt.target
        setTagInput(value)
    }

    const handleChange = (evt)=>{
        const {name,value,checked,type} = evt.target
        setProductData((oldValue)=>{
            return {
                ...oldValue,
                [name]:type === 'checkbox' ? checked:value
            }
        })
    }

    const validateData = ()=>{


        try{
            const {
                product_name,product_price,product_category,
                product_description,product_tags,product_in_stock,
                product_available,product_on_sale,product_prev_price,
                product_main_image,product_imageURL2,product_imageURL3,
                product_imageURL4,product_date_relevance,product_delivery,
                product_pickUp
            } = productData

            if(product_name.trim()==""){
                throw 'enter product name'
            }else if(product_price.trim()==""){
                throw "enter product price"
            }else if(product_category.trim()==""){
                throw "enter product category"
            }else if(product_description.trim()==""){
                throw "enter product description"
            }else if(product_tags.length < 1){
                throw "enter at least one tag for product e.g kitchen,cooking,etc..."
            }else if(!product_in_stock){
                throw "enter product in stock field"
            }else if(product_available.trim()==""){
                throw "select product availability field"
            }else if(product_on_sale.trim()==""){
                throw "fill the product on sale field"
            }else if(product_on_sale === 'true' && !product_prev_price ){
                    throw 'fill previous price of the product'
            }else if(!product_main_image || !product_imageURL2 || !product_imageURL3 || !product_imageURL4){
                throw "fill the image fields of the product"
            }else if(!product_date_relevance){
                throw "fill the date relevance field of the product"
            }else{
                return true
            }

        }catch(err){
            alert(err)
            return false
        }



    }

    const handleAddProduct = async(evt)=>{
        evt.preventDefault()
        try{
            if(validateData()){

                if(productData.product_on_sale !== 'true'){
                    setProductData((oldValue)=>{
                        return {
                            ...oldValue,
                            product_prev_price:''
                        }
                    })
                }

                const {
                    sellerID,
                    product_name,product_price,product_category,
                    product_description,product_tags,product_in_stock,
                    product_available,product_on_sale,product_prev_price,
                    product_main_image,product_imageURL2,product_imageURL3,
                    product_imageURL4,product_date_relevance,product_delivery,product_pickUp
                } = productData

                const response = await addProduct({
                    sellerID,
                    product_name,product_price,product_category,
                    product_description,product_tags,product_in_stock,
                    product_available,product_on_sale,product_prev_price,
                    product_main_image,product_imageURL2,product_imageURL3,
                    product_imageURL4,product_date_relevance,product_delivery,product_pickUp
                })

                console.log(response)

                const radios = document.getElementsByName("product_available")
                const checkBox1 = document.getElementsByName("product_delivery")
                const checkBox2 = document.getElementsByName("product_pickUp")

                for(let i=0;i<radios.length;i++){
                    radios[i].checked = false
                }
                for(let i=0;i<checkBox1.length;i++){
                    checkBox1[i].checked = !true
                }
                for(let i = 0;i<checkBox2.length;i++){
                    checkBox2[i].checked = !true
                }


                setProductData((oldValue)=>{
                    return {
                        product_name:'',product_price:'',product_category:'',
                        product_description:'',product_tags:[],product_in_stock:'',
                        product_available:'',product_on_sale:'',product_prev_price:'',
                        product_main_image:'',product_imageURL2:'',product_imageURL3:'',
                        product_imageURL4:'',product_date_relevance:'',product_delivery:false,
                        product_pickUp:false
                    }
                })            
            }

        }catch(err){
            alert(err)
            return false
        }
    }

    console.log(productData)

    const handleTagAdd = ()=>{
        try{
            const findSimilar = productData.product_tags.find((each)=>each.name === tagInput)
            if(!findSimilar){
                if(tagInput.trim()!==""){
                    if(productData.product_tags.length < 5){

                        setProductData((oldValue)=>{
                            return {
                                ...oldValue,
                                product_tags:[...oldValue.product_tags,{id:oldValue.product_tags.length + 1,name:tagInput}]
                            }
                        })
                        setTagInput("")
                        return true

                    }else{
                        throw "cannot add more than 5 tags"
                    }

                }else{
                    throw "cannot add empty tag"
                }
       
            }else{
                throw 'cannot add same tag more than once'
            }

        }catch(err){
            alert(err)
            return false
        }
    }



    const handleTagRemove = (id)=>{
        const findTag = productData.product_tags.findIndex((each)=>{
            return each.id === id
        })
        setProductData((oldValue)=>{
            return{
                ...oldValue,
                product_tags:[...oldValue.product_tags.slice(0,findTag),...oldValue.product_tags.slice(findTag+1)]
            }
        })
    }

    const tagMaps =  productData.product_tags.length > 0 ? productData.product_tags.map((each)=>{
        return <TagComponent key={`tags${each.id}`} name={each.name} id={each.id} handleClick={handleTagRemove}/>
    }):<h1>blank</h1>

    const commonInputStyle = 'border-2 py-2 rounded-md outline-none indent-1 w-full'

    return (
        <div className={'mt-24'}>
            <div className={'w-[98%] m-auto md:w-[70%] lg:w-[50%] py-2 px-5 border-box'}>
                <form name='product-form' autoComplete={'off'}>
                    <fieldset className={'border-2 py-2 px-5 rounded-lg'}>

                        <legend className={'text-center'}>Product Information:</legend>
                        <div className={'grid grid-cols-5 gap-5'}>
                            <input type={'text'} placeholder={'Product name'} name={'product_name'} value={productData.product_name} onChange={handleChange} autoFocus className={'border-2 col-start-1 col-end-3 py-2 rounded-md outline-none indent-1'}></input>
                            <input type={'text'} placeholder={'Product price'} name={'product_price'} value={productData.product_price} onChange={handleChange} className={'border-2 col-start-4 col-end-6 rounded-md outline-none indent-1'}></input>
                            <input type={'text'} placeholder={'Product category'} name={'product_category'} value={productData.product_category} onChange={handleChange} className={'border-2 col-start-1 col-end-6 py-2 rounded-md outline-none indent-1'}></input>
                            <textarea placeholder={'Product description'} rows={'4'} name={'product_description'} value={productData.product_description} onChange={handleChange} className={'border-2 resize-none col-start-1 col-end-6 rounded-md outline-none indent-1'}></textarea>
                            <input type={'text'} name={'product_tags'} placeholder={'Add one or up to five Product tags'} value={tagInput} onChange={handleTagInput} className={'border-2 col-start-1 col-end-5 py-2 rounded-md indent-1 outline-none'}></input>
                            {productData.product_tags.length > 0 && <div className={'col-start-1 col-end-6 flex indent-2 justify-between'}>
                                {
                                    tagMaps
                                }
                            </div>}
                            <button type={'button'} name={'add_btn'} className={'py-1 col-start-5 col-end-6 bg-green-600 rounded-md'} onClick={handleTagAdd}>Add tag</button>
                            <input type={'number'} name={'product_in_stock'} value={productData.product_in_stock} onChange={handleChange} placeholder={'Quantity'} className={'py-2 col-start-1 col-end-6 border-2 rounded-md outline-none indent-1'}></input>
                        </div>
                        <br></br>
                        <label>Available: </label>
                        <input type={'radio'} name={'product_available'} id={'yes'} value={true} onChange={handleChange}></input><label htmlFor={'yes'}> Yes</label>
                        <input type={'radio'} name={'product_available'} id={'no'} value={false} className={'ml-2'} onChange={handleChange}></input><label htmlFor={'no'}> No</label>
                        <br></br>
                        <br></br>
                        <select name={'product_on_sale'} className={commonInputStyle} value={productData.product_on_sale} onChange={handleChange}>
                            <option value={''}>--Is product on sale--</option>
                            <option value={'true'}>Yes</option>
                            <option value={'false'}>No</option>
                        </select>
                        {productData.product_on_sale === 'true' && 
                        <div>
                            <br></br>
                            <br></br>
                            <input type={'text'} placeholder={'Previous price'} name={'product_prev_price'} value={productData.product_prev_price} onChange={handleChange} className={commonInputStyle}></input>
                        </div>
                        }
                        <br></br>
                        <br></br>
                        <input type={'url'} placeholder={'Main image URL'} name={'product_main_image'} value={productData.product_main_image} onChange={handleChange} className={commonInputStyle}></input>
                        <br></br>
                        <br></br>
                        <input type={'url'} placeholder={'Image URL2'} name={'product_imageURL2'} value={productData.product_imageURL2} onChange={handleChange} className={commonInputStyle}></input>
                        <br></br>
                        <br></br>
                        <input type={'url'} placeholder={'Image URL3'} name={'product_imageURL3'} value={productData.product_imageURL3} onChange={handleChange} className={commonInputStyle}></input>
                        <br></br>
                        <br></br>
                        <input type={'url'} placeholder={'Image URL4'} name={'product_imageURL4'} value={productData.product_imageURL4} onChange={handleChange} className={commonInputStyle}></input>
                        <br></br>
                        <br></br>
                        <input type={'date'} required placeholder={'Date relevance'} name={'product_date_relevance'} value={productData.product_date_relevance} onChange={handleChange} className={commonInputStyle}></input>
                        <br></br>
                        <br></br>
                        <label>Delivery options:</label><br></br><br></br>
                        <input type={'checkbox'} name={'product_delivery'} id={'delivery'} onChange={handleChange}></input>
                        <label htmlFor={'delivery'}> Delivery</label>
                        <br></br>
                        <input type={'checkbox'} name={'product_pickUp'} id={'pick_up'} onChange={handleChange}></input>
                        <label htmlFor="pick_up"> Pick up</label>
                        <br></br>
                        <br></br>
                        <input type={'submit'} onClick={handleAddProduct} className={'py-2 bg-green-600 px-5 rounded-md cursor-pointer text-white'}></input>
                    </fieldset>
                </form>
            </div>
        </div>
    )

}

export default AddProductForm