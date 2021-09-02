import { useState } from 'react';
import './App.css';
import { Lists, CurrentList, SideNav } from './components';
import { FAKE_LISTS } from './constants';
import { Item, List } from './interfaces';

interface AppState {
  lists: { [key: string]: List };
  currentListId: string;
  loading: boolean;
}

const initState: AppState = {
  lists: FAKE_LISTS,
  currentListId: '',
  loading: false
}

const App = () => {
  // Define app state.
  const [ state, setState ] = useState<AppState>(initState);

  // Define a function to update the currentList when the user selects a list.
  const updateCurrentList = (id: string) => {
    setState(state => {
      return {
        ...state,
        currentListId: id
      };
    });
  };

  // Define a function to complete a list item.
  const completeItem = (listId: string, itemId: string) => {
    setState(state => {
      const item = state.lists[listId].items[itemId];
      item.completed = true;
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...state.lists[listId],
            items: {
              ...state.lists[listId].items,
              [itemId]: item
            }
          }
        }
      };
    });
  };

  // TODO: save the item with an API call and get the new ID.
  // The this function can go away.
  const getNextItemId = (listId: string): string => {
    const idArr = Object.keys(state.lists[listId].items);
    if (!!idArr.length) {
      return (Math.max(...idArr.map(key => parseInt(key, 10))) + 1).toString();
    } else {
      return "1";
    }
  }

  // Define a method to add an item to a list.
  const addItemToList = (id: string, item: Partial<Item>) => {
    const newItemId = getNextItemId(id);
    item.id = newItemId;
    setState(state => {
      return {
        ...state,
        lists: {
          ...state.lists,
          [id]: {
            ...state.lists[id],
            items: {
              ...state.lists[id].items,
              [newItemId]: item as Item
            }
          }
        }
      };
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SideNav lists={state.lists} onListSelected={updateCurrentList}/>
        </div>
        <div className="col-9">
          <CurrentList
            list={state.lists[state.currentListId]}
            addItemToList={addItemToList}
            completeItem={completeItem} />
        </div>
      </div>
    </div>
  );
}

export default App;
