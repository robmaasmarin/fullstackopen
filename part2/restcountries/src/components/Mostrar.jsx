import Temperature from "./Temperature";
const CountryDetail = ({ country }) => {
  
  return (
    <div>
      <h1>{country.name.common}</h1> 
              <div>Capital: {country.capital}</div>
              <div>Area: {country.area}</div>
              <h2>Languages</h2>
              <ul>{/* country languages is not an array, that's the reasong I use Object.values to map it*/}
                {Object.values(country.languages).map((l) => {
                    return (
                        <li key={l}>
                            {l}
                        </li>
                    )
                })}
                
              </ul>
              <br></br>
              <img src={country.flags.png} alt="flag"/>
              <Temperature country={country} />
    </div>
  );
};

export default CountryDetail;