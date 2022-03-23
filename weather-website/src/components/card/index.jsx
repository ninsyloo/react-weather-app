import React from "react";
import { Link } from "react-router-dom";
import './card.css'

export default function Card({ min, max, name, img, onClose, id, weather }) {
  return (
    <div className="card-container">
      <div className='img-section'>

        <div className="layer"></div>
        
        <button onClick={onClose} className="btn-close">
          X
        </button>
        
        <img
              className="weather"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="80"
              height="80"
              alt=""
        />

      <h3 className='type'>{weather}</h3>

      </div>
      
      <div className="info-section">

       <div class="wave"></div>
				<div class="layer-1"></div>
				<div class="layer-2"></div>
				<div class="layer-3"></div>

        <div className='contents'>

        <div>
            <h1>{min}<span class="deg">&deg;</span></h1>
        </div>

        <div>
            <h1>{max}<span class="deg">&deg;</span></h1>
        </div>

        <Link to={`/ciudad/${id}`}>
          <h3 className="card-title">{name}</h3>
        </Link>

        </div>
  
      </div>
    </div>
  );
}
