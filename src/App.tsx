import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const welcome: string = "Welcome to React TS";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{welcome}</h2>
        <p>
          {1 + 1}
            <br />
          {
            2 + 2
          }
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;