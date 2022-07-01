// import axios from 'axios';
// import { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  // const [objects, setObjects] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/objects').then(response => { setObjects(response.data) });
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* {
          objects.map(o => (
            <span>{o.object}</span>
          ))} */}
      </header>
    </div>
  );
}

export default App;