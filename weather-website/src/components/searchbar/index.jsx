import React, { useState } from "react";
import './searchbar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        className='search-input'
        type="text"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input className='submit-btn' type="submit" value="Add" />
    </form>
  );
}
