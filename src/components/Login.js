import styled from "styled-components";
import SecondSection from "./login-internal/SecondSection";

const Login = (props) => {
    return (
       <Container>
        <Content>
            <CTA>
                <CTALogoOne src="/clone-images/cta-logo-one.svg" alt="cta-logo-one-image" />
                <SignUp>Get Disney Bundle</SignUp>
                 <Description>
                  Stream now.<Link href="#">Terms apply.</Link>
                 </Description>
                 <DesciptionSecond>Get Premier Access to Raya and the Last Dragon for an additional fee
                     with a Disney+ subscription. As of 03/26/21, the price of Disney+
                     and The Disney Bundle will increase by $1.
                 </DesciptionSecond>
                 <CTALogoTwo src="/clone-images/cta-logo-two.png" alt="cta-logo-two-image" />
                 <DescriptionThree>
                 <LinkSecond href="#">Login for Disney+ only.</LinkSecond>
                   $7.99/month
                 </DescriptionThree>
            </CTA>
         <BgImage />
        </Content>
        <SecondSection />
    </Container>
    )
};

// container section
const Container = styled.section`
overflow: hidden;
display:flex;
flex-direction: column;
text-align:center;
// height: 100vh;
`;
// content div
const Content = styled.div`
width: 100%;
height: 100%;
// min-height: 100vh;
margin-bottom: 10px;
padding: 82px 42px;
display: flex;
flex-direction: column;
position: relative;
box-sizing: border-box;
justify-content: center;
align-items: center;
`;

// bgimage
const BgImage = styled.div` 
height: 100%;
bacground-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/clone-images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1;
`;
// cta div
const CTA = styled.div` 
max-width: 650px;
width: 100%;
display:flex;
flex-direction: column
`;
// ctaonelogo
const CTALogoOne = styled.img` 
width: 100%;
max-width: 600px;
min-height: 1px;
display:block;
margin-bottom: 12px;
`;

// signup
const SignUp = styled.div` 
font-weight: bold;
color: #f9f9f9;
background-color: #0063ef;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: #0483ee
}
`;
// description first p style
const Description = styled.p` 
width: 100%;
display:flex;
justify-content:center;
margin-bottom: 12px;
line-height: 1.5;
color: hsla(0,0%,75.3%,.8);
`;
// Link a style
const Link = styled.a` 
text-decoration: underline;
cursor:pointer;
margin-left:2px;
font-size: 12px;
`;

// description second p style
const DesciptionSecond = styled.p` 
color: hsla (0, 0%, 95.4%, 1);
font-size: 12px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px
`;
// ctalogo2 images
const CTALogoTwo = styled.img` 
width: 100%;
max-width: 600px;
display:inline-block;
margin-bottom: 20px;
vertical-align: bottom;
`;
// description Three p style
const DescriptionThree = styled.span` 
color: hsla(0,0%,75.3%,.8);
font-size: 1.3em;
letter-spacing: .01em;
`;
// LinkSecond a style
const LinkSecond = styled.a` 
width: 100%;
text-align:center;
margin-bottom: 6px;
display:block;
font-size: 1.1rem;
line-height: 1.5;
text-decoration: underline;
cursor:pointer;
`;

export default Login;