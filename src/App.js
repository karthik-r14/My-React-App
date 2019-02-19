import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{1 + 1}</h1>
        <h1>My first React app</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Google
        </a>
      </div>
    );
  }
}

export default App;
