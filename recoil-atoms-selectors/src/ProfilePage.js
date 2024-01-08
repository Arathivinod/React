// ProfilePage.js

import React from 'react';
import Tabs from './Tabs';
import DressOptions from './DressOptions';
import BikeOptions from './BikeOptions';
import GunOptions from './GunOptions';
import { useRecoilValue } from 'recoil';
import { userProfileState } from './atoms';

function ProfilePage() {
  const userProfile = useRecoilValue(userProfileState);

  return (
    <div>
      <h1>User Profile</h1>
      {/* Display selected options */}
      <p>Selected Dress: {userProfile.selectedDress}</p>
      <p>Selected Bike: {userProfile.selectedBike}</p>
      <p>Selected Gun: {userProfile.selectedGun}</p>

      {/* Tabs component */}
      <Tabs />

      {/* Options components */}
      <DressOptions />
      <BikeOptions />
      <GunOptions />
    </div>
  );
}

export default ProfilePage;
