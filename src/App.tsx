import './App.css';
import { Lists, CurrentList } from './components';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Lists lists={[]} onListSelected={() => {}}/>
        </div>
        <div className="col-9">
          <CurrentList list={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;
