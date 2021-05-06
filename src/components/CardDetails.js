import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

const CardDetails = (props) => {  
    const { id } = useParams();
    const [ detailData, setDetailData ] = useState({});

    useEffect(() => {
        db.collection("movies").doc(id)
        .get()
        .then((doc) =>{
            if (doc.exists) {
               setDetailData(doc.data());
            }else {
                console.log("no such document in firebase");
            }
        }).catch((error) =>{
            console.log("Error getting Document:", error);
        })

    }, [id]);

return (
  <Container>
     <Background>
         <img src={detailData.backgroundImg}  alt={detailData.title} />
     </Background>

     <ImageTitle>
     <img src={detailData.titleImg}  alt={detailData.title} />
     </ImageTitle>
     <ContentMeta>
         <Controls>
            <Player>
                <img src="/clone-images/play-icon-black.png" alt="playiconblack" />
                <span>Play</span>
            </Player>
            <Trailer>
                <img src="/clone-images/play-icon-white.png" alt="playiconwhite" />
                <span>Trailer</span>
            </Trailer>
            <AddList>
                <span />
                <span />
            </AddList>
            <GroupWatch>
                <div>
                    <img src="/clone-images/group-icon.png"  alt="group-icon" />
                </div>

            </GroupWatch>
         </Controls>
         <SubTitle>{detailData.subTitle}</SubTitle>
         <Description>
         {detailData.description}
         </Description>
     </ContentMeta>
  </Container>
)
};

// container style
const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

// image background style
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

// imagetitle style
const ImageTitle = styled.div`
width: 100%;
display: flex;
-webkit-box-pack: start;
justify-content: flex-start;
align-items: flex-end;
margin: 0px auto;
height: 30vw;
min-height: 170px;
padding-bottom: 26px;


img {
    width: 35vw;
    min-width:200px;
    max-width: 600px;
}
`;

// contentmeta style
const ContentMeta = styled.div`
max-width: 874px;
`;

// control style
const Controls = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
min-height: 56px;
margin: 24px 0px;
`;

// player button style
const Player = styled.button`
font-size: 15px;
margin: 0px 22px 0px 0px;
padding: 0px 24px;
height: 56px;
border-radius: 5px;
align-items: center;
display: flex;
cursor: pointer;
justify-content; center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249, 249, 249);
border: none;
color: rgb(0, 0, 0);

img {
    width: 32px;
}

&:hover {
    background: rgb(198, 198, 198)
}

@media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    margin: 0px 10px 0px 0px;
    font-size: 12px;

    img{
        width: 25px;
    }
}
`;

// trailer button style
const Trailer = styled(Player)`
background: rgba(0, 0, 0, 0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;

// addlist style
const AddList = styled.div`
display: flex;
margin-right: 16px;
height: 44px;
width: 44px;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.6);
border-radius: 50%;
border: 2px solid white;
cursor: pointer;

 span {
   display: inline-block;
   background-color: rgb(249, 249, 249);

   &:first-child {
       height: 2px;
       transform: translate(1px, 0px) rotate(0deg);
       width: 16px;
   }

  &:nth-child(2) {
    height: 16px;
    transform: translateX(-8px) rotate(0deg);
    width: 2px;
  }
}
`;

// groupwatch style
const GroupWatch = styled.div`
display: flex;
height: 44px;
width: 44px;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
background: white;

div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
}

img {
    width: 100%;
}
}
`;

// subtitle style
const SubTitle = styled.div`
min-height: 20px;
color: rgb(249, 249, 249);
font-size: 15px;

@media (max-width: 768px) {
    font-size: 12px;
}
`;
// description style
const Description = styled.div`
   line-height: 1.4;
   font-size: 20px;
   padding: 16px 0px;
   color: rgb(249, 249, 249);

   @media (max-width: 768px) {
    font-size: 14px;
   }
`;

export default CardDetails;