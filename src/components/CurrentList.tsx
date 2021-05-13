import React from 'react';
import { Item, List } from '../interfaces';
import { AddItem } from './AddItem';
import { ListItem } from './ListItem';

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
          <div className="my-3">
            {!Object.keys(list.items).length ? (
              <div>No items on this list yet...</div>
            ) : Object.keys(list.items).map(key => (
              <ListItem item={list.items[key]} onCompleteItem={() => {}} />
            ))}
          </div>
          <AddItem addItem={addItem} />
        </div>
      ) : (
        <div>Select a list</div>
      )}
    </div>
  );
};
