// src/BikeOptions.js

import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedBikeState } from './atoms';

const BikeOptions = () => {
  const [selectedBike, setSelectedBike] = useRecoilState(selectedBikeState);

  const handleBikeSelection = (bike) => {
    setSelectedBike(bike);
    console.log('Selected Bike:', selectedBike); // Make sure this is here
  };

  return (
    <div>
      <h4>Bike Options</h4>
      <div onClick={() => handleBikeSelection('BikeOption1')}>
        <p>Bike Option 1</p>
      </div>
      <div onClick={() => handleBikeSelection('BikeOption2')}>
        <p>Bike Option 2</p>
      </div>
      <div onClick={() => handleBikeSelection('BikeOption3')}>
        <p>Bike Option 3</p>
      </div>
    </div>
  );
};

export default BikeOptions;
