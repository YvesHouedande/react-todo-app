import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Wrapper from './wrapper';

function App() {
  return (
    <Router>
      <div className="App">
        <Wrapper />
      </div>
    </Router>
  );
}

export default App;
