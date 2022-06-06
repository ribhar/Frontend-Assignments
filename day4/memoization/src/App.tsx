import './App.css';
import {MemoisedTimer} from './components/Timer';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <MemoisedTimer/>
      <Todo/>
    </div>
  );
}

export default App;