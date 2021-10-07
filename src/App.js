import React, { useState, useEffect } from 'react' // import state, effect
import "./App.css";
import axios from 'axios';  // import axios
import { BASE_URL, API_KEY } from './constants/constants'

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
      <img src={nasaData.url} alt={`${nasaData.title}`} />
      <div id="apodInfo">
        <h1>{nasaData.title}</h1>
        <p>{nasaData.date}</p>
        {nasaData.count}
      </div>
    </div>
  );
}

export default App;

// ? api_key=PgSbtDE3dBkTP3R106x14txU1vtcF8lo1vjEpKsz