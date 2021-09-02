import React from 'react';
import { List } from '../../interfaces';
import './SideNav.scss';

interface SideNavProps {
  lists: { [key: string]: List };
  onListSelected: (id: string) => void
}

export const SideNav: React.FC<SideNavProps> = ({ lists, onListSelected }) => {
  return (
    <div className="sideNav">
      {!!lists ? (
        <ul className="sideNav__list">
          {Object.keys(lists).map(key => (
            <li className="sideNav__listItem" key={key} onClick={() => onListSelected(key)}>
              <i className="icon">{lists[key].icon}</i>
              <span className="sideNav__listName">{lists[key].name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>Create a list.</div>
      )}
    </div>
  );
};
