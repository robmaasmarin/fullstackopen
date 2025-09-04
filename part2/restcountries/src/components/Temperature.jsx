import { useEffect, useState } from "react";

const Temperature = ({ country }) => {
    const [temperature, setTemperature] = useState(null);
    const [wind, setWind] = useState(null);
    const [icon, setIcon] = useState(null);

    const lat = country.capitalInfo.latlng[0];
    const long = country.capitalInfo.latlng[1];
    //declaramos otra constante para los iconos a mostrar
    const iconsToShow = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  61: "🌧️",
  71: "❄️",
  80: "🌧️",
  95: "⛈️"
};
    //agregamos useEffect para decirle a react que ejecute el código cada vez que cambien lat y long
    useEffect(() => {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`

    // aquí metemos un fetch para hacer la consulta

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            setTemperature(data.current_weather.temperature);
            setWind(data.current_weather.windspeed)
            setIcon(data.current_weather.weathercode)
            //console.log(icon)
        });
        }, [lat, long]);
  
  return (
    <div>
            <p>Temperature{" "}{temperature}{" "} Celsius</p>
            {iconsToShow[icon]}
            <p>Wind{" "}{wind}{" "}m/s</p>
    </div>
  );
};
export default Temperature