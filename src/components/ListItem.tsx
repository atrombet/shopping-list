import React from 'react';
import { Item } from '../interfaces';

interface ListItemProps {
  item: Item;
  onCompleteItem: (itemId: string) => void
}

export const ListItem: React.FC<ListItemProps> = ({ item, onCompleteItem }) => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        id={item.id}
        checked={item.completed}
        onChange={() => onCompleteItem(item.id)}
        disabled={item.completed} />
      <label className="form-check-label" htmlFor={item.id}>{item.text}</label>
    </div>
  );
};
