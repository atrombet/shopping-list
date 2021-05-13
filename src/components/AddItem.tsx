import React, { useState } from 'react';
import { Item } from '../interfaces';

interface AddItemProps {
  addItem: (item: Partial<Item>) => void
}

export const AddItem: React.FC<AddItemProps> = ({ addItem }) => {
  const [ itemText, setItemText ] = useState('');

  const onItemAdded = () => {
    const newItem: Partial<Item> = {
      text: itemText,
      completed: false,
      dateAdded: new Date()
    };
    addItem(newItem);
    setItemText('');
  }

  return (
    <div className="row align-items-center">
      <div className="col-auto">
        <input className="form-control" placeholder="Add an item" value={itemText} onChange={e => setItemText(e.target.value)} />
      </div>
      <div className="col-auto">
        <button type="button" className="btn btn-primary" onClick={onItemAdded}>Add Item</button>
      </div>
    </div>
  );
};
