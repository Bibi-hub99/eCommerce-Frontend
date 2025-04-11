import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import LogCarousel from './log-carousel'
import SignUpCarousel from './signUp-carousel'

function PlayCarousel(){

    const settings = {
        dots:false,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplayspeed:2000
    }

    return (
        <Slider {...settings}>
            <LogCarousel/>
            <SignUpCarousel/>
        </Slider>
    )

}

export default PlayCarousel