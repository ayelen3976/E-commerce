import React from 'react';
import logo from './logo.svg';
import './App.css';
import { product } from '../../api/src/models/Product';
import Producto from './components/Producto';

// Era con fetch?
function componentDidMount() {
  fetch({ producto })
      .then(response => response.json())
      .then(data => console.log(data));
}   

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
         <Producto producto={ product }/>
      </main>
    </div>
  );
}

export default App;
