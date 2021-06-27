import React from "react";

export default function City({ city }) {
  return (
    <div className="city-data">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperature: {city.temp} ºC</div>
          <div>Climate: {city.weather}</div>
          <div>Wind: {city.wind} km/h</div>
          <div>Cloudiness: {city.clouds}</div>
          <div>Latitude: {city.latitude}º</div>
          <div>Longitude: {city.longitude}º</div>
        </div>
      </div>
    </div>
  );
}
