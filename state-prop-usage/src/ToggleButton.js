// src/ToggleButton.js
import React, { useState } from 'react';
import './ToggleButton.css'; 

const ToggleButton = (props) => {
  const [currentTheme, setCurrentTheme] = useState(0);

  const toggleTheme = () => {
    setCurrentTheme((currentTheme + 1) % props.themes.length);
  };

  return (
    <div className={`toggle-button-container bg-${props.themes[currentTheme].toLowerCase()}`}>
      <h2>{props.title}</h2>
      <p>Current Theme: {props.themes[currentTheme]}</p>
      <button className="btn btn-primary" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ToggleButton;
