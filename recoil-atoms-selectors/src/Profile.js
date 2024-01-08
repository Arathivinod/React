// src/Profile.js

import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedDressState, selectedBikeState, selectedGunState } from './atoms';

const Profile = () => {
  const selectedDress = useRecoilValue(selectedDressState);
  const selectedBike = useRecoilValue(selectedBikeState);
  const selectedGun = useRecoilValue(selectedGunState);

  return (
    <div>
      <h3>User Profile</h3>
      <p>Selected Dress: {selectedDress}</p>
      <p>Selected Bike: {selectedBike}</p>
      <p>Selected Gun: {selectedGun}</p>
    </div>
  );
};

export default Profile;
