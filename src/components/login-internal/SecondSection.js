import styled from "styled-components";
import { auth, provider } from "../../firebase";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../../app-features/user-features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SecondSection = (props) => { 
    const dispatch = useDispatch();    //dispatch is use to access the dispatch
    const history = useHistory ();       // history is use to allow to access history
    const userName = useSelector(selectUserName);  // username for using the selector to get access to the username, it is pulling data from store.js
    const userPhoto = useSelector (selectUserPhoto); 
    // google authentication handlers
    const handleAuth = () => {
        // if or else statement
        if (!userName) {
     auth.signInWithPopup(provider).then((result) => {
    //  console.log(result)
    // this allow to set the new user
    setUser(result.user);
     })
    //  if any problem on google authentication,this error message show in alert box
     .catch((error)  => {
      alert(error.message);
     });
    } 
}
// set the function to the user

const setUser = (user) => {
    // dispatch the user to login details
    dispatch(
        setUserLoginDetails({
            // all the data are coming frrom your google aythentications id which is store in a object when you login with your google account
            name:  user.displayName,
            email: user.email,
            photo: user.photoURL,
        })
    )
}

return (
    <Container>
       <ColumnFirst>
       <DescriptionFirst>
          Now streaming with <span>Premier Access</span>
       </DescriptionFirst>
        <DesciptionSecond>See Raya and the Last Dragon before it's available to all Disney+ subscribers on June 4. Watch as many times as you like with Premier Access for $29.99 and your Disney+ subscription.
        </DesciptionSecond>
        <Button onClick={handleAuth}>
         Get Premium Access Now
        </Button>
       </ColumnFirst>
       <ColumnSecond>
        <picture>
        <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Raya_Side_Align_1440_en-US.jpg" alt="cta-logo-one-image" />
        </picture>
     </ColumnSecond>
</Container>
)

};

// container section
const Container = styled.div`
overflow: hidden;
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: center;
z-index: 1;
padding: 40px;
margin: 0 auto;
position: relative;
width: 100%;
max-width: 1440px;

@media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
};
@media only screen and (max-width: 479px) {
    padding: 40px 20px;
    padding: 40px 20px;
}
`;

// first Column content style
const ColumnFirst = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
padding: 0 4%;
margin-top: 20px;
width: 50%;
flex: 0 0 auto;
min-height: 1px;
z-index: 1;
box-sizing: border-box;

@media only screen and (max-width: 768px) {
    width: auto!important;
    padding: 0;
    display: block;
    text-align: center;
}

`;
// Second Column img style
const ColumnSecond = styled.div`
flex: 1 1 auto;
min-height: 1px;
width: auto;
position: relative;
z-index: 2;

img {
    display: block;
    width: 100%;
}

@media only screen and (max-width: 768px)
 {
    width: 100%;
    margin-top: 20px;
 }

`;

// descriptionfirst p style
const DescriptionFirst = styled.h2` 
font-size: 42px;
margin: 0 0 24px;
line-height: 1.2;
text-align: left;
color: #f9f9f9;
 
@media only screen and (max-width: 768px) {
    margin: 0 0 16px;
    font-size: 26px;
    text-align: center;
}
@media only screen and (max-width: 479px) {
    margin: 0 0 16px;
    font-size: 26px;
    text-align: center;
}
span {
    display: block;
}
`;

// descriptionsecond p style
const DesciptionSecond = styled.p` 
color: hsla(0,0%,75.3%,.8);
font-size: 16px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
text-align: left;

@media only screen and (max-width: 479px)
 {
    font-size: 16px;
 }
 @media only screen and (max-width: 768px){
    margin: 0 0 20px;
    text-align: center
}
`;

// get premium access now
const Button = styled.a` 
width: 200px;
min-width: 360px;
font-weight: 700;
color: #000;
background-image: linear-gradient(135deg,#7cbfce,#adeae8,#7cbfce);
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 14px;
text-transform: uppercase;
margin-bottom: 30px;
cursor: pointer;
border: 1px solid transparent;
border-radius: 4px;

@media only screen and (max-width: 479px) {
    min-width: 200px;
    font-size: 12px;
    padding: 11.5px 12px;
    margin-bottom: 20px;
};

`;


export default SecondSection;
