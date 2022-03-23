import React from "react";
import './city.css'

export default function City({ city }) {

  console.log('this is city', city)

  return (
    <div className="city-container">
        {city.map((city)=>{
          return(
          <div className="w">
          <div className="w-right" key={city.id}>

          <h2 className="w-title">{city.name}</h2>

          <div>
            <img
              className="w-image" 
              src={"http://openweathermap.org/img/wn/" + city.img + "@2x.png"}
              width="80"
              height="80"
              alt=""/>

            </div>

          </div>
          <div className="w-left">
          <div className="item temp">{Math.round(city.temp - 273.15)} ºC</div>
          <div className="item">Climate: {city.weather}</div>
          <div className="item">Wind: {city.wind} km/h</div>
          <div className="item">Cloudiness: {city.clouds}</div>
          <div className="item">Latitude: {city.latitude}º</div>
          <div className="item">Longitude: {city.longitude}º</div>
          </div>
         </div>
          )
        })}
    </div>
  );
}
