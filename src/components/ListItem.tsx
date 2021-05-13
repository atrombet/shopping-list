import React from 'react';
import { Item } from '../interfaces';

interface ListItemProps {
  item: Item;
  onCompleteItem: (id: string) => void
}

export const ListItem: React.FC<ListItemProps> = ({ item, onCompleteItem }) => {
  return (
    <div className="flex align-items-center">
      <input type="checkbox" className="form-check-input" checked={item.completed} onChange={() => onCompleteItem(item.id)} />
      <span className="ms-3">{item.text}</span>
    </div>
  );
};
