import React from 'react';
import { List } from '../interfaces';

interface ListsProps {
  lists: { [key: string]: List };
  onListSelected: (id: string) => void
}

export const Lists: React.FC<ListsProps> = ({ lists, onListSelected}) => {
  return (
    <ul className="p-3 list-group">
      <li className="list-group-item">List 1</li>
      <li className="list-group-item">List 2</li>
      <li className="list-group-item">List 3</li>
    </ul>
  );
};
