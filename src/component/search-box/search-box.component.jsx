import React from 'react';

import './search-box.styles.css';

// Added classname as a prop to make it more reusable
export const SearchBox = ({ placeholder, handleChange, className }) => (
  <input
    className={`search ${className}`}
    type='search'
    placeholder= {placeholder}
    onChange={handleChange}
  />
);
