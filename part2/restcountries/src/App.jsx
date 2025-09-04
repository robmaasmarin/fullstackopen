import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Filtro from "./components/MiFiltro";


function App() {
  const [countriesQ, setcountriesQ] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        console.log("promise fulfilled");
        setcountriesQ(response.data);
      });
  }, []);
  console.log("render", countriesQ.length, "countries");

  return (
    <div>
      <h2>Countries directory</h2>
      <Filtro countriesQ={countriesQ} />
    </div>
  );
}

export default App;
