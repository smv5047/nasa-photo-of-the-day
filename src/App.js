import React, {useState, useEffect } from "react";
import "./App.css";
import getNasaImages from "./nasa-api";
import styled from 'styled-components';
import { Jumbotron } from 'reactstrap'
import {TwitterShareButton, FacebookShareButton, EmailShareButton, LinkedinShareButton} from 'react-share';
import {TwitterIcon, FacebookIcon, EmailIcon, LinkedinIcon} from 'react-share';


const customDiv = styled.div({
  display: 'flex',
  background: 'red'
})

function App(props) {
  
  const[NASAImage, updateNASAImage] = useState([]);

  useEffect(()=> {
   
    getNasaImages(updateNASAImage);
  }, []);

  return (
    <div className="App">
      <h1>NASA Image of the Day</h1>
      <h5>{NASAImage.date}</h5>
      <h3>{NASAImage.title}</h3>
      <img src={NASAImage.url} alt="Nasa of the Day" width="50%"/>
      
      
      <Jumbotron>
        <h4>What am I Looking at?</h4>
        <p width="50%">{NASAImage.explanation}</p>
      </Jumbotron>
      <customDiv>
        <TwitterShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
          <TwitterIcon round= {true} width="32" height="32"></TwitterIcon>
        </TwitterShareButton>
        <FacebookShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
          <FacebookIcon round= {true} width="32" height="32"></FacebookIcon>
        </FacebookShareButton>
        <LinkedinShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
          <LinkedinIcon round= {true} width="32" height="32"></LinkedinIcon>
        </LinkedinShareButton>
        <EmailShareButton title='Check out the NASA Astronomy Picture of the Day' children="NASAA" url={NASAImage.url}>
          <EmailIcon round= {true} width="32" height="32"></EmailIcon>
        </EmailShareButton>
      </customDiv>
      
    </div>
  );
}

export default App;
