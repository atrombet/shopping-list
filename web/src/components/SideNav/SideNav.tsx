import React from 'react';
import { List } from '../../interfaces';

interface SideNavProps {
  lists: { [key: string]: List };
  onListSelected: (id: string) => void
}

export const SideNav: React.FC<SideNavProps> = ({ lists, onListSelected }) => {
  return (
    <div className="sideNav"></div>
  );
};
