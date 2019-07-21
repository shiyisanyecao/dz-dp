import React from 'react';
import logo from './assets/imgs/sousuo.png';
import Home from './views/Home/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
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
      <Home />
    </div>
  );
}

export default App;
