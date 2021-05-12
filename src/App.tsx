import { useState } from 'react';
import './App.css';
import { Lists, CurrentList } from './components';
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

  // Define a method to update the currentList when the user selects a list.
  const updateCurrentList = (id: string) => {
    setState(state => {
      return {
        ...state,
        currentListId: id
      };
    });
  };

  // Define a method to add an item to a list.
  const addItemToList = (id: string, item: Partial<Item>) => {
    setState(state => {
      return {
        ...state,
        lists: {
          ...state.lists,
          [id]: {
            ...state.lists[id],
            items: [
              ...state.lists[id].items,
              item as Item
            ]
          }
        }
      }
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 border-end">
          <Lists lists={state.lists} onListSelected={updateCurrentList}/>
        </div>
        <div className="col-9">
          <CurrentList
            list={state.lists[state.currentListId]}
            addItemToList={addItemToList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
