import React from "react";
import Card from "../card";
import './cards.css'
import Splash from '../splash'

export default function Cards({ cities, onClose }) {
  console.log(cities)
  return (
    <div className="container-cards">
      {cities.length ? cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          weather={c.weather}
          onClose={() => onClose(c.id)}
          id={c.id}
        />
      )):<Splash/>
    }
    </div>
  );
}
