import React from "react";
import SearchBar from "../searchbar";
import { Link } from "react-router-dom";

export default function Nav({onSearch}) {
  return (
    <nav className="nav-container">
      <Link to="/">
        <span className="brand">W.A.</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
