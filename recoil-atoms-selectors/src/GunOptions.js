// src/GunOptions.js

import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedGunState } from './atoms';

const GunOptions = () => {
  const [, setSelectedGun] = useRecoilState(selectedGunState);

  const handleGunSelection = (gun) => {
    setSelectedGun(gun);
  };

  return (
    <div>
      <h4>Gun Options</h4>
      <div onClick={() => handleGunSelection('GunOption1')}>
        <p>Gun Option 1</p>
      </div>
      <div onClick={() => handleGunSelection('GunOption2')}>
        <p>Gun Option 2</p>
      </div>
      <div onClick={() => handleGunSelection('GunOption3')}>
        <p>Gun Option 3</p>
      </div>
    </div>
  );
};

export default GunOptions;
