import React from 'react';
import { List } from '../interfaces';

interface ListsProps {
  lists: { [key: string]: List };
  onListSelected: (id: string) => void
}

export const Lists: React.FC<ListsProps> = ({ lists, onListSelected}) => {
  return (
    <div className="p-3">
      {!!lists ? (
        <ul className="nav flex-column">
          {Object.keys(lists).map(key => (
            <li
              className="nav-item"
              key={key}
              onClick={() => onListSelected(key)}>
                <button type="button" className="btn btn-link">{lists[key].name}</button>
              </li>
          ))}
        </ul>
      ) : (
        <div>Create a list.</div>
      )}
    </div>

  );
};
