// src/ItemList.js

import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { itemListState } from './atoms';

function ItemList() {
  const [itemList, setItemList] = useRecoilState(itemListState);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItemList([...itemList, newItem]);
    setNewItem('');
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {itemList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default ItemList;
