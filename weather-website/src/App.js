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

  function onClose(id){}
  
  function onSearch(city){}
  
  function onFilter(){}


  return (
    <div className="App">
   
    </div>
  );
}

export default App;
