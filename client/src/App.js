import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListsContainer from './components/List/ListsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Hello Hiplyst!</h1>
      </header>
      <ListsContainer />
    </div>
  );
}

export default App;
