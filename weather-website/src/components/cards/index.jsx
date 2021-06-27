import React from "react";
import Card from "../card";

export default function Cards({ cities, onClose }) {
  return (
    <div className="cards-container">
      {cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        />
      ))}
    </div>
  );
}
