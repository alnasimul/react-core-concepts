import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first react paragraph</p>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle = {
    color:'cyan',
    border: '1px solid gray',
    margin: '20px 20px',
    padding: '20px 20px',
  }
  return (
    <div style={personStyle}>
      <h1>Name: Al Nasimul Haque </h1>
      <h3>Profession: Web Developer</h3>
    </div>
  )
}
export default App;
