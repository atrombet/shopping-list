import { useState } from 'react';
import './App.css';
import { Lists, CurrentList } from './components';
import { FAKE_LISTS } from './constants';
import { List } from './interfaces';
interface AppState {
  lists: { [key: string]: List };
  currentList?: List;
  loading: boolean;
}

const initState: AppState = {
  lists: FAKE_LISTS,
  currentList: undefined,
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
        currentList: state.lists[id]
      };
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-3 border-end">
          <Lists lists={state.lists} onListSelected={updateCurrentList}/>
        </div>
        <div className="col-9">
          <CurrentList list={state.currentList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
