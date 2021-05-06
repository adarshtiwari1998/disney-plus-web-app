import styled from "styled-components";

const Viewers = (props) => { 

return (
   <Container>
      <Wrap>
           <a>
           <img src="/clone-images/viewers-disney.png" alt="viewers-disney" />
           <video autoPlay={true} loop={true} playsInline={true}>
             <source src="/clone-videos/1564674844-disney.mp4" type="video/mp4" />
           </video>
           </a>
       </Wrap>
       <Wrap>
           <a>
           <img src="/clone-images/viewers-pixar.png" alt="viewers-pixar" />
           <video autoPlay={true} loop={true} playsInline={true}>
             <source src="/clone-videos/1564676714-pixar.mp4" type="video/mp4" />
           </video>   
           </a>
       </Wrap>
       <Wrap>
           <a>
           <img src="/clone-images/viewers-marvel.png" alt="viewers-marvel" />
           <video autoPlay={true} loop={true} playsInline={true}>
             <source src="/clone-videos/1564676115-marvel.mp4" type="video/mp4" />
           </video>
           </a>
       </Wrap>
       <Wrap>
           <a>
           <img src="/clone-images/viewers-national.png" alt="viewers-national" />
           <video autoPlay={true} loop={true} playsInline={true}>
             <source src="/clone-videos/1564676296-national-geographic.mp4" type="video/mp4" />
           </video>           
           </a>
       </Wrap>
       <Wrap>
           <a>
           <img src="/clone-images/viewers-starwars.png" alt="viewers-starwars" />
           <video autoPlay={true} loop={true} playsInline={true}>
             <source src="/clone-videos/1608229455-star-wars.mp4" type="video/mp4" />
           </video>    
           </a>
       </Wrap>

   </Container>
)
   
};

// container style
const Container = styled.div`
margin-top: 30px;
padding: 30px 0px 26px;
display: grid;
grid-gap: 25px;
gap: 25px;
grid-template-columns: repeat(5, minmax(0, 1fr));

@media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

`;

// wrap style
const Wrap = styled.div`
padding-top: 56.26%;
border-radius: 12px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);

img {
    inset: 0px;
    position: absolute;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
}

video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
}

&:hover {
    box-shadow: rgb(0 0 0 / 81%) 0px 41px 59px -16px, rgb(0 0 0 / 73%) 0px 31px 23px -11px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.9);
    

    video {
        opacity: 1;
    }
}

`;


 export default Viewers;
