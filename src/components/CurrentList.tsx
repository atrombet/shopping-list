import React from 'react';

interface CurrentListProps {
  list: any;
}

export const CurrentList: React.FC<CurrentListProps> = ({ list }) => {
  return (
    <div className="p-3">
      <div>Items go here...</div>
      <button type="button" className="btn btn-primary">Add an item</button>
    </div>
  );
};
