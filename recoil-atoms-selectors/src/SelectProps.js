// src/SelectProps.js

import React from 'react';
import { useRecoilState } from 'recoil';
import DressOptions from './DressOptions';
import BikeOptions from './BikeOptions';
import GunOptions from './GunOptions';
import Tabs from './Tabs';
import { activeTabState } from './atoms';

const SelectProps = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  return (
    <div>
      <h3>Select Props</h3>
      <Tabs
        tabs={['Dress', 'Bike', 'Gun']}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />
      {activeTab === 'Dress' && <DressOptions />}
      {activeTab === 'Bike' && <BikeOptions />}
      {activeTab === 'Gun' && <GunOptions />}
    </div>
  );
};

export default SelectProps;
