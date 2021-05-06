import styled from "styled-components";
import { useEffect } from "react";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../app-features/user-features/userSlice";
// dispatch allow to dispatch action to our store
// selector will allows to retrieve selectors from store
const Header = (props) => {
    const dispatch = useDispatch();    //dispatch is use to access the dispatch
    const history = useHistory ();       // history is use to allow to access history
    const userName = useSelector(selectUserName);  // username for using the selector to get access to the username, it is pulling data from store.js
    const userPhoto = useSelector (selectUserPhoto); 

    // for home.js page this useeffect use

    useEffect(() => {
        // this are the function and this function are only runs when this variable (userName) are updated
        // on authentication state change
      auth.onAuthStateChanged(async (user) => {
        // if user are exist or logged in
         if (user) {
            //  so set the user
             setUser(user)
            //and give access the user to come on home page, redirect to the home page
            history.push("./home");
         }
      })
    }, [userName])   // this are called dependencies so here dependencies are userName changed

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
    // else statement
    // if user click on signout button so he or she redirect to the login page and again user we have to loggedin to access home page
    else if (userName) {
        auth.signOut().then(() => {
            dispatch(setSignOutState())
            // this path are redirecting to the login page when user click on signout button
            history.push("/")
        }).catch((error) => alert(error.message));
    }
 };

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
    <Nav>
    <Logo>
    <img src="/clone-images/logo.svg" alt="disney+logo"/>
    </Logo>
    {  // if the user are not signin or login then show the button that is login button 
        !userName ? (
        <Login onClick={handleAuth}>Login</Login> 
        // create a fragment
        ):(
        <>
        {/* or if the user are already login then do/show this */}

    <NavMenu>
        <a href="/home" >
        <img src="/clone-images/home-icon.svg" alt="disney+ homeicon"/>
        <span>Home</span>
       </a>
       <a href="/search" >
        <img src="/clone-images/search-icon.svg" alt="disney+ searchicon"/>
        <span>Search</span>
       </a>
       <a href="/watchlist" >
        <img src="/clone-images/watchlist-icon.svg" alt="disney+ watchlisticon"/>
        <span>Watchlist</span>
       </a>
       <a href="/movie" >
        <img src="/clone-images/movie-icon.svg" alt="disney+ movieicon"/>
        <span>Search</span>
       </a>
       <a href="/original" >
        <img src="/clone-images/original-icon.svg" alt="disney+ originalicon"/>
        <span>Original</span>
       </a>
    </NavMenu>
    {/* create the sign out functionality */}
    <SignOut>
        {/* avatar image of user */}
        <UserImg src={userPhoto} alt={userName} />
        {/* dropdown functionality */}
        <DropDown>
            <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
    </SignOut>
    {/* empty fragement */}
    </>
    )}
    </Nav>

);

};

// Nav bar style
const Nav = styled.nav`
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
padding: 0 37px;
letter-spacing: 16px;
z-index: 4;
opacity: 1;
transform: translateZ(0);
pointer-events: auto;

@media (max-width: 768px) {
overflow: scroll;
}
`;

// Nav bar logo style
const Logo = styled.a`
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
transition: all .2s ease 0s;
padding:0;

img {
    display:block;
    width:100%;
}
`;


// Nav menu style
const NavMenu = styled.div`
position: relative;
display: flex;
flex-flow: row nowrap;
justify-content: flex-end;
align-items: center;
height: 100%;
margin: 0;
margin-right: auto;
margin-left: 25px;
padding: 0;

a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-transform: uppercase;

img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
}

span {
    position: relative;
    padding: 2px 0px;
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    // line-height: 1.08;
    white-space: nowrap;

    &:before {
        position: absolute;
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        right: 0px;
        bottom: -6px;
        left:0;
        height: 2px;
        opacity: 0;
        transform-origin: left center;
        transform: scale(0);
        transition: a;; 250ms cubic-beizier(0.25, 0.46, 0.45, 0.55);
        visibility: hidden;
        width: auto
    }
}

   &:hover {
    span:before {
        transform: scale(1);
        visibility: visible;
        opacity: 1 !important
    }
}
}
// @media (min-width: 768px) {
//     display: none;
// }
`;

// Nav menu login button style
const Login = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
letter-spacing: 1.5px;
text-decoration: none;
text-transform: uppercase;
border-radius: 4px;
cursor: pointer;
vertical-align: middle;
display: inline-block;
border: 1px solid #f9f9f9;
transition: all 0.2s ease 0s;

&:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
}
`;

// useravatarimage style
const UserImg = styled.img`
  height: 100%;
`;

//signout- dropdown style
//initialize before call
const DropDown = styled.div`
top: 48px;
right: 0px;
position: absolute;
width: max-content;
background: rgb(19, 19, 19);
box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
border: 1px solid rgba(151, 151, 151, 0.34);
border-radius: 5px;
padding: 10px;
font-size: 14px;
letter-spacing: 3px;
opacity: 0;
`;

// signout style
const SignOut = styled.div`
position: relative;
height: 46px;
width:46px;
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;

${UserImg} {
border-radius: 50%;
width: 100%;
height: 100%;
}

&:hover {
    ${DropDown} {
        opacity: 1;
        transition-duration: 1s;
    }
}
`;




export default Header;