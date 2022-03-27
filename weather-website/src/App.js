import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import About from './components/about'
import Cards from './components/cards';
import City from './components/city';
import Nav from './components/nav';
import './App.css';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';


function App() {

  const [cities, setCities] = useState([]);

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }
  
  function onSearch(city){

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(e => e.json())
    .then((data)=>{
      if (data.main !== undefined){
        const city = {
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
          img: data.weather[0].icon,
          id: data.id,
          wind: data.wind.speed,
          temp: data.main.temp,
          name: data.name,
          weather: data.weather[0].main,
          clouds: data.clouds.all,
          latitude: data.coord.lat,
          longitude: data.coord.lon
        };
        setCities( oldCities => [...oldCities, city]);
      } else {
        alert('City not found! Try another')
      }
    });
  }
  
/*   function onFilter(cityId){

    let city = cities.filter(c => c.id === parseInt(cityId));
    if (city.length > 0) return city[0];
    return null;
  } */

  return (
    <div className="container">
        <Route path = '/'
        render = {() => < Nav onSearch = { onSearch }/>}/>
        <Route
        exact path = '/'
        render = {()=> <Cards cities = {cities} onClose = {onClose}/>}
        />
        <Route
        exact path = '/about' 
        component = { About }/> 
        <Route
         exact path='/ciudad/:ciudadId'
         render={({match}) => 
         <City
          city={cities.filter(c => c.id === parseInt(match.params.ciudadId))}
          />}
  />
    </div>
  );
}

export default App;
