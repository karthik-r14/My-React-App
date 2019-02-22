import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "Header From state",
      content: "Content from state",
      data:
        [{
          "id": 1,
          "name": "Foo",
          "age": "20"
        },
          {
            "id": 2,
            "name": "Bar",
            "age": "30"
          },
          {
            "id": 3,
            "name": "Baz",
            "age": "40"
          }]
    }
  }

  render() {
    return (
      <div className="App App-header">
        <h2>{this.state.header}</h2>
        <h2>{this.state.content}</h2>
        <Header />
        <Content />
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i}
            data = {person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-logo-spin">
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
          href="/my_page"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open My page
        </a>
      </div>
    );
  }
}

class TableRow extends Component{
    render() {
      return (
        <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
        </tr>
      );
    }
}

export default App;
