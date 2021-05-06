import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselImages } from "../utils";
import Slider from "react-slick";

const ImgSlider = (props) => { 
  let settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slideToShow: 1,
      slideToScroll: 1,
      autoplay: true,
    
 }
 return (
    <Carousel {...settings}>
          {carouselImages.map((image) => (
       <Wrap>
           <a>
           <img src={image.url}  alt={image.name} />
           </a>
       </Wrap>
           ))}
     </Carousel>

 );
};

// carousel custom style
const Carousel = styled(Slider)`
margin-top: 20px;

& > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

&:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;

    }
}

ul li button {
    &:before {
        font-size: 10px;
        color: rgb(150, 158, 171);
    }
}

li.slick-active button:before {
    color: white;
}

.slick-list {
    overflow: initial;
}

.slick-prev {
    left: -75px;
}

.slick-next {
    right: -75px;
}

`;

// wrap style
const Wrap = styled.div`
border-radius: 4px;
position: relative;
cursor: pointer;

a {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
        width: 100%;
        height: 100%;
    }
     &:hover {
         padding: 0px;
         border: 4px solid rgb(249, 249, 249, 0.8);
         transition-duration: 300ms;
     }
}
`;




export default ImgSlider;