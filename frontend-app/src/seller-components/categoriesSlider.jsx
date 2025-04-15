import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {useMyContext} from "../contextAPI"
import {NavLink} from 'react-router-dom'

function CategorySlider(){

    const {categories} = useMyContext()
    const allStates = 'py-2 px-5 ml-2 block text-black bg-white  hover:bg-black hover:text-white text-center'
    const active = 'bg-black'+allStates
    const inActive = ''+allStates

    function PrevArrow(props){
        const {className,style,onClick} = props
        return (
            <div className={className} style={{...style,display:'block',backgroundColor:'grey',color:'black'}} onClick={onClick}>

            </div>
        )
    }

    function NextArrow(props){
        const {className,style,onClick} = props
        return (
            <div className={className} style={{...style,display:'block',backgroundColor:'grey'}} onClick={onClick}>

            </div>
        )
    }

    const settings = {
        dots:false,
        autoplay:false,
        infinite:false,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        arrows:true,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
        responsive:[
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1
                }
            },

            {
                breakpoint:600,
                settings:{
                    slideToShow:3,
                    slidesToScrolll:1
                }
            },

        ]
    }

    const sliderStyle = 'slider-container w-[88%] md:w-[90%] lg:w-[95%] m-auto'

    return (
        <div className={'bg-white'} style={{marginTop:'4.5rem',position:'fixed',top:'0',width:'100%',zIndex:'20',boxShadow:'1px 1px 1px 2px lightgray'}}>
            <div>

            </div>
            <div className={sliderStyle}>
                <Slider arrows={true} {...settings} style={{width:'100%',margin:'auto'}}>
                    {categories.map((each)=>{
                        return (
                            <NavLink key={`categoriesSeller${each.id}`} to={`categories/${each.url}`} className={({isActive}) => isActive ? active:inActive}>{each.title}</NavLink>
                        )
                    })}
                </Slider>
            </div>
            
        </div>
    )

}

export default CategorySlider