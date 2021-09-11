import React from 'react';
import { Item, List } from '../../interfaces';
import { AddItem } from '../AddItem';
import { ListItem } from '../ListItem';
import './CurrentList.scss';

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
    itemsExist = !!Object.keys(list.items).length;
    if (itemsExist) {
      const items = Object.keys(list.items).map(key => list.items[key]);
      todos = items.filter(item => !item.completed).map(item => (
        item.type === 'header'
          ? <h3 className="currentList__header">{item.text}</h3>
          : <ListItem item={item} key={item.id} onCompleteItem={onCompleteItem} />
        ));
      completedItems = items.filter(item => item.completed).map(item => (
        <div className="completed-item" key={item.id}>{item.text}</div>
      ));
    }
  }

  return (
    <div className="currentList">
      {!!list ? (
        <div>
          <h1 className="currentList__name">
            {list.name}
            <i className="icon">people</i>
          </h1>
          <div className="currentList__note">{list.note || 'Add note'}</div>
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
