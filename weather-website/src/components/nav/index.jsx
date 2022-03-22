import React from "react";
import SearchBar from "../searchbar";
import { Link } from "react-router-dom";
import './nav.css'

export default function Nav({onSearch}) {
  return (
    <nav className="nav-container">
      <Link to="/">
        <span className="brand">Weatherly.</span>
      </Link>
      <Link to="/about">
        <span className='aboutbtn'>About</span>
      </Link>
      <SearchBar className='searchbar' onSearch={onSearch} />
    </nav>
  );
}
