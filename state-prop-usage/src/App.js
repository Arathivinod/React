// src/App.js
import React from 'react';
import ToggleButton from './ToggleButton';

const App = () => {
  const themes = ['Rose', 'Dark', 'Ocean'];

  return (
    <div>
      {/* Use the ToggleButton component with themes */}
      <ToggleButton title="Theme Switcher" themes={themes} />
    </div>
  );
};

export default App;
