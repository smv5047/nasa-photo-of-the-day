import React, {useState, useEffect } from "react";
import "./App.css";
import getNasaImages from "./nasa-api"



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
      <img src={NASAImage.url} alt="Nasa of the Day" />
      <p>{NASAImage.explanation}</p>
    </div>
  );
}

export default App;
