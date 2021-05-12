import React from 'react';
import { Item, List } from '../interfaces';
import { AddItem } from './AddItem';

interface CurrentListProps {
  list: List | undefined;
  addItemToList: (id: string, item: Partial<Item>) => void;
}

export const CurrentList: React.FC<CurrentListProps> = ({ list, addItemToList }) => {
  const addItem = (newItem: Partial<Item>) => {
    if (list) {
      addItemToList(list?.id, newItem);
    }
  }
  return (
    <div className="p-3">
      {!!list ? (
        <div>
          <h2>{list.name}</h2>
          <div className="mb-3">No items on this list yet...</div>
          <AddItem addItem={addItem} />
        </div>
      ) : (
        <div>Select a list</div>
      )}
    </div>
  );
};
