import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setCity(value);
    if (value.trim()) {
      onSearch(value);  
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="Enter city"
      />
    </div>
  );
};

export default SearchBar;
