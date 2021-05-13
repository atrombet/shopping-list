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
        <ListItem item={item} key={item.id} onCompleteItem={() => {}} />
      ));
    }
  }

  return (
    <div className="p-3">
      {!!list ? (
        <div>
          <h2>{list.name}</h2>
          <AddItem addItem={addItem} />
          <div className="py-3 mb-3 border-bottom">
            {itemsExist ?
              todos :
              <div>No items on this list yet...</div>
            }
          </div>
          {completedItems}
        </div>
      ) : (
        <div>Select a list</div>
      )}
    </div>
  );
};
