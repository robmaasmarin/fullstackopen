import { useState } from "react";
import CountryDetail from "../components/Mostrar";
import Temperature from "./Temperature";

const Filtro = ({ countriesQ }) => {
  //creamos un elemento searching que almacenará el texto que va escribiendo el user
  const [filter, setFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  //definimos el filtro que contiene los contactos cuyo nombre incluye lo que va escribiendo el user
  const countriesToShow = countriesQ.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );
  //console.log("this is the length", countriesToShow.length);
  const countriesLength = countriesToShow.length;

  const handleShowClick = (country) => {
    console.log(country.name.common);
    setSelectedCountry(country);
    //console.log(selectedCountry);
  };
  let ContentToDisplay = "";
  if (filter !== "" && countriesLength > 10) {
    ContentToDisplay = "Too many matches, specify another filter";
  } else if (countriesLength == 1) {
    ContentToDisplay = (
      <ul style={{ listStyleType: "none", textAlign: "left", padding: 0 }}>
        {countriesToShow.length > 0 ? (
          countriesToShow.map((country, i) => (
            <li key={i}>
              <h1>{country.name.common}</h1>
              <div>Capital: {country.capital}</div>
              <div>Area: {country.area}</div>
              <h2>Languages</h2>
              <ul>
                {/* country languages is not an array, that's the reasong I use Object.values to map it*/}
                {Object.values(country.languages).map((l) => {
                  return <li key={l}>{l}</li>;
                })}
              </ul>
              <br></br>
              <img src={country.flags.png} alt="flag" />
              <h2>Weather in {country.capital} </h2>
              <Temperature country={country} />
            </li>
          ))
        ) : (
          <li>No results</li>
        )}
      </ul>
    );
  } else {
    ContentToDisplay = (
      <div>
        <ul style={{ listStyleType: "none", textAlign: "left", padding: 0 }}>
          {countriesToShow.length > 0 ? (
            countriesToShow.map((country, i) => (
              <li key={i}>
                {country.name.common}{" "}
                <button onClick={() => handleShowClick(country)}>Show</button>
              </li>
            ))
          ) : (
            <li>No results</li>
          )}
          {/* si hay país seleccionado mostramos el detalle. Seleccionado meaning pulsar botón */}
        </ul>
        {selectedCountry && <CountryDetail country={selectedCountry} />}
      </div>
    );
  }

  return (
    <div>
      <p>find countries: </p>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <br></br>

      {/* mostramos la lista de contactos tras pasar por el filtro */}
      {ContentToDisplay}
    </div>
  );
};

export default Filtro;
