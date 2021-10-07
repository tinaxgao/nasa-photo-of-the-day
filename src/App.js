import React, { useState, useEffect } from 'react' // import state, effect
import "./App.css";
import axios from 'axios';  // import axios

function App() {
  const [nasaData, setNasaData] = useState([]); //declare data name

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=PgSbtDE3dBkTP3R106x14txU1vtcF8lo1vjEpKsz`)
    .then(resp => {
      console.log(resp.data);
      setNasaData(resp.data);
    }).catch(err => {
      console.error(err)
    })
   }, [])   // use effect & axios to bring in data,set response data as const

  return (
    <div className="App">
      <img src={`${nasaData.url}`} alt="nasa" />
      <div id="apodInfo">
        <h1>{nasaData.title}</h1>
        <p>{nasaData.date}</p>
        {nasaData.count}
      </div>
    </div>
  );
}

export default App;
