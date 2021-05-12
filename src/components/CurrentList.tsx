import React from 'react';
import { List } from '../interfaces';

interface CurrentListProps {
  list: List | undefined;
}

export const CurrentList: React.FC<CurrentListProps> = ({ list }) => {
  return (
    <div className="p-3">
      {!!list ? (
        <div>
          <div>Items go here...</div>
          <button type="button" className="btn btn-primary">Add an item</button>
        </div>
      ) : (
        <div>Select a list</div>
      )}
    </div>
  );
};
