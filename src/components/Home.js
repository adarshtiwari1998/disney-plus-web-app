import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import NewDisneyPlus from "./NewDisneyPlus";
import Originals from "./Originals";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../app-features/movie-features/movieSlice";
import { selectUserName } from "../app-features/user-features/userSlice"

const Home = (props) => { 
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneyPlus = [];
    let originals = [];
    let trending = [];


    useEffect(() => {
       db.collection("movies").onSnapshot((snapshot) => {
           snapshot.docs.map((doc)  => {
              console.log(recommends);
               switch (doc.data().type) {
                   case "recommend" :
                    recommends = [...recommends, { id: doc.id, ...doc.data() }];
                   break;

                   case "new" :
                    newDisneyPlus = [...newDisneyPlus, { id: doc.id, ...doc.data() }];
                   break;

                   case "original" : 
                   originals = [...originals, { id: doc.id, ...doc.data() }];
                   break;

                   case "trending" :
                   trending = [...trending, { id: doc.id, ...doc.data() }];
               }
            });

            dispatch(
                setMovies({
                recommend: recommends,
                newDisneyPlus: newDisneyPlus,
                original: originals,
                trending: trending
              })
              );
            });
           }, [userName]);

     

    return (
        <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisneyPlus />
        <Originals />
        <Trending />
        </Container>
    )
};

// container style
const Container = styled.main`
position: relative;
min-height: calc(100vh - 210px);
overflow-x: hidden;
display: block;
top: 70px;
padding: 10px calc(2.7vw + 5px);

&:after {
    background: url("/clone-images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
}

`;


export default Home;
