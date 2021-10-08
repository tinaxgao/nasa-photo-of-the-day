import React, { useState, useEffect } from "react"; // import state, effect
import "./App.css";
import axios from "axios"; // import axios
import { BASE_URL, API_KEY } from "./constants/constants";
import styled from "styled-components";

const Card = styled.div`
  width: 400px;
  position: absolute;
  margin: 30px;
  padding: 30px;
  z-index: 9;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
`;

function App() {
  const [nasaData, setNasaData] = useState([]); //declare data name

  useEffect(() => {
    axios
      .get(`${BASE_URL}api_key=${API_KEY}&count=1`)
      .then((resp) => {
        console.log(resp.data[0]);
        setNasaData(resp.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // use effect & axios to bring in data,set response data as const

  return (
    <div
      id="nasaImg"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${nasaData.url})`,
        backgroundSize: "cover",
      }}
    >
      <Card id="apodInfo">
        <h1>{nasaData.title}</h1>
        <p>{nasaData.date}</p>
        <p>{nasaData.explanation}</p>
      </Card>
    </div>
  );
}

export default App;