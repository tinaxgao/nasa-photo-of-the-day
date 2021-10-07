import React, { useState, useEffect } from 'react' // import state, effect
import "./App.css";
import axios from 'axios';  // import axios
import { BASE_URL, API_KEY } from './constants/constants'
import styled from 'styled-components';

const Card = styled.div`
  width: 60%;
  position: absolute;
  margin: 30 px;
  z-index: 9;
  border: 1px solid red;
  `

function App() {
  const [nasaData, setNasaData] = useState([]); //declare data name

  useEffect(() => {
    axios.get(`${BASE_URL}api_key=${API_KEY}`)
    .then(resp => {
      console.log(resp.data);
      setNasaData(resp.data);
    }).catch(err => {
      console.error(err)
    })
   }, [])   // use effect & axios to bring in data,set response data as const

  return (
    <div className="App">
      <div id="nasaImg" style={{ backgroundImage: `url(${nasaData.url})` }}>
      <Card id="apodInfo">
        <h1>{nasaData.title}</h1>
        <p>{nasaData.date}</p>
        {nasaData.count}
      </Card>
      </div>
    </div>
  );
}

export default App;