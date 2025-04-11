import React from "react"
import ImageDisplayer from '../components/imageDisplayer'
import PlayCarousel from '../components/play-carousel'
import {useMyContext} from '../contextAPI'


function Home(){
    
    const {serviceTypes} = useMyContext()//types of services offered stored in array format in context for resuability


    return (
        <div className={'w-full'}>
            <div className={'flex flex-col justify-center h-[100vh] bg-[url(https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg?w=768)] w-full bg-no-repeat bg-cover bg-center'}>
                <div className={'text-white  w-[98%] m-auto text-center'}>
                    <h1 className={'text-5xl capitalize font-bold'}>feeling hungry and need something to eat <span className={'text-green-700'} style={{boxShadow:'3px 5px 10px',fontWeight:'bolder'}}>very fast</span> worry less we've got you</h1>
                    <p className={'underline text-2xl'}>try our very tasty and mouthful variety of food we offer</p>
                </div>
            </div>
            <div className={'py-10 w-[98%] m-auto'}>
                <h2 className={'text-3xl'}>Types of Services Available <span className={'bg-green-500'}>Log in to view menu</span></h2>
                <br></br>
                <div>
                    {
                        serviceTypes.map((each)=>{
                            //mapping of services types after importing it
                            return (
                                <div key={`services${each.id}`}>
                                    <h3 className={'text-2xl capitalize'}><mark style={{backgroundColor:each.bgColor}}>{each.title}</mark></h3>
                                    <hr className={`py-1 border-none`} style={{backgroundColor:each.bgColor}}></hr>
                                    <div className={'grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'}>{/*grid display for displaying the image cards user each service type in grid form*/}

                                        {
                                            //mapping of the children property of each element in service types and children themselves are stored as objects in arrays
                                            each.children.map((single)=>{
                                                return (
                                                    <div className={'bg-white border-2 rounded-lg'} key={`children${single.id}`}>
                                                        <div className={'h-[250px]'}>
                                                            <ImageDisplayer imageURL={single.imageURL} height={'100%'} width={'100%'} radius={'1rem'}/>
                                                        </div>
                                                        <div className={'text-center'}>
                                                            <h3>{single.description}</h3>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                    <br></br>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={'overflow-x-hidden'}>
                <PlayCarousel/>             
            </div>
        </div>

    )

}

export default Home