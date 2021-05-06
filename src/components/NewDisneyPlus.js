import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisneyPlus } from "../app-features/movie-features/movieSlice";


const NewDisneyPlus = (props) => { 
const movies = useSelector(selectNewDisneyPlus);
console.log(movies, ":");
return (

 <Container>
  <h4>New To Disney+</h4>
  <Content>
    {movies &&
     movies.map((movie, key) => (
      <Wrap key={key}>
        {movie.id}
        <Link to={`/carddetails/` + movie.id}>
          <img src={movie.cardImg} alt={movie.title} />
        </Link>
      </Wrap>
     ))}
  </Content>
</Container>
)

};

// container style
const Container = styled.div`
padding: 0 0 26px;
position: relative;
min-height: auto !important;

h4{
  margin-bottom: 13px;
  margin-top:4px;
  font-weight: 500;
  font-size: 20px;
  color: #f9f9f9;
}
`;

// content style
const Content = styled.div`
display: grid;
grid-gap: 25px;
position: relative;
gap: 25px;
grid-template-columns: repeat(4, minmax(0, 1fr));


@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
`;

const Wrap = styled.div`
padding-top: 56.25%;
border-radius: 12px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border: 3px solid rgba(249, 249, 249, 0.1);

img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
}

&:hover {
    box-shadow: rgb(0 0 0 / 81%) 0px 41px 59px -16px, rgb(0 0 0 / 73%) 0px 31px 23px -11px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.9);
}
`;


export default NewDisneyPlus;