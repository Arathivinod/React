// src/Tabs.js

import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <ul className="nav nav-tabs">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <button
            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
