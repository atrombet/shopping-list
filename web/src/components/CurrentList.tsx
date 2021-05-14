import React from 'react';
import { Item, List } from '../interfaces';
import { AddItem } from './AddItem';
import { ListItem } from './ListItem';

interface CurrentListProps {
  list: List | undefined;
  addItemToList: (id: string, item: Partial<Item>) => void;
  completeItem: (listId: string, itemId: string) => void;
}

export const CurrentList: React.FC<CurrentListProps> = ({ list, addItemToList, completeItem }) => {
  let itemsExist, todos, completedItems;

  const addItem = (newItem: Partial<Item>) => {
    if (list) {
      addItemToList(list?.id, newItem);
    }
  }

  const onCompleteItem = (itemId: string) => {
    if (list) {
      completeItem(list.id, itemId);
    }
  }


  if (!!list) {
    itemsExist = !!list && !!Object.keys(list.items).length;
    if (itemsExist) {
      const items = Object.keys(list.items).map(key => list.items[key]);
      todos = items.filter(item => !item.completed).map(item => (
        <ListItem item={item} key={item.id} onCompleteItem={onCompleteItem} />
      ));
      completedItems = items.filter(item => item.completed).map(item => (
        <div className="completed-item" key={item.id}>{item.text}</div>
      ));
    }
  }

  return (
    <div className="p-3">
      {!!list ? (
        <div>
          <h2>{list.name}</h2>
          <div className="my-3">
            {itemsExist ?
              todos :
              <div>No items on this list yet...</div>
            }
          </div>
          <AddItem addItem={addItem} />
          {completedItems}
        </div>
      ) : (
        <div>Select a list</div>
      )}
    </div>
  );
};
