// src/DressOptions.js

import React from 'react';
import { useRecoilState } from 'recoil';
import { selectedDressState } from './atoms';

const DressOptions = () => {
  const [, setSelectedDress] = useRecoilState(selectedDressState);

  const handleDressSelection = (dress) => {
    setSelectedDress(dress);
  };

  return (
    <div>
      <h4>Dress Options</h4>
      <div onClick={() => handleDressSelection('DressOption1')}>
        <p>Dress Option 1</p>
      </div>
      <div onClick={() => handleDressSelection('DressOption2')}>
        <p>Dress Option 2</p>
      </div>
      <div onClick={() => handleDressSelection('DressOption3')}>
        <p>Dress Option 3</p>
      </div>
    </div>
  );
};

export default DressOptions;
