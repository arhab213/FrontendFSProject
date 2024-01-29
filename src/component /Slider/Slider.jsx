import { Carousel } from 'react-responsive-carousel'
import './Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Slider (props){
  let{images}=props
return(
    <Carousel>
        {
            images.map((e)=>{
                return(<img id='imageCarousel' src={e} />)
            })
        }
    </Carousel>
)
}
export default Slider