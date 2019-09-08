import React, {useState, useEffect } from "react";
import "./App.css";
import getNasaImages from "./nasa-api";
import styled from 'styled-components'
import { Jumbotron } from 'reactstrap'
import {TwitterShareButton, FacebookShareButton, EmailShareButton, LinkedinShareButton} from 'react-share';
import {TwitterIcon, FacebookIcon, EmailIcon, LinkedinIcon} from 'react-share';



const CustomDiv = styled.div`
  display: flex;
  background: #E9ECEF;
  justify-content: center;
`

const ImageDiv = styled.div`
  width: 80%;
  margin: 50px auto 70px;
  

  @media (max-width: 800px) {
    width: 95%;
  }
`


// Animation Courtesy of Emile Choghi https://codepen.io/echoghi
const AnimationDiv = styled.div`
@keyframes particleAnimation
{
    from {
        left: -100px;
    }
    to {
        left: calc( 100% + 100px );
    }
}  

  position:fixed;
  left:0px;
  top:50px;
  width:1px;
  height:1px;
  background-color:white;
  position:fixed;
  animation-name:particleAnimation;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration:5s;
  top:60%;

  &:before {
    position:absolute;
  display:block;
  content:"";
  width:100px;
  right:1px;
  top:0px;
  height:1px;
  background: linear-gradient(to right, rgba(0,0,0,0) 0%,rgba(255,255,255,0.4) 100%); 
  }
}
`

const SocialDiv = styled.div`
  padding: 0 2.5%;
`



function App(props) {
  
  const[NASAImage, updateNASAImage] = useState([]);

  useEffect(()=> {
   
    getNasaImages(updateNASAImage);
  }, []);

  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-4">NASA Image of the Day</h1>
        
        <h3>{NASAImage.title}</h3>
        <h5>{NASAImage.date}</h5>
      </Jumbotron>
      <ImageDiv>
        <img src={NASAImage.url} alt="Daily NASA Astronomy" width="80%"/>
      </ImageDiv>
      <Jumbotron>
        <h4>What am I Looking at?</h4>
        <p width="50%">{NASAImage.explanation}</p>
      </Jumbotron>
      <CustomDiv>
        <SocialDiv>
          <TwitterShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
            <TwitterIcon round= {true} width="32" height="32"></TwitterIcon>
          </TwitterShareButton>
        </SocialDiv>
        <SocialDiv>
          <FacebookShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
            <FacebookIcon round= {true} width="32" height="32"></FacebookIcon>
          </FacebookShareButton>
        </SocialDiv>
        <SocialDiv>
          <LinkedinShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
            <LinkedinIcon round= {true} width="32" height="32"></LinkedinIcon>
          </LinkedinShareButton>
        </SocialDiv>
        <SocialDiv>
          <EmailShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
            <EmailIcon round= {true} width="32" height="32"></EmailIcon>
          </EmailShareButton>
        </SocialDiv>
      </CustomDiv>
      
        <AnimationDiv>
          <p>.</p>
        </AnimationDiv>
        <AnimationDiv>
          <p>.</p>
        </AnimationDiv>
        <AnimationDiv>
          <p>.</p>
        </AnimationDiv>
     
    </div>
  );
}

export default App;
