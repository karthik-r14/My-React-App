import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerState: "Header From state",
      contentState: "Content from state",
      myData: [],
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

    this.setStateHandler = this.setStateHandler.bind(this);
  }

  setStateHandler() {
    var item = "setState..."
    var myArray = this.state.myData.slice();
    myArray.push(item);
    this.setState({ myData: myArray })
  };

  render() {
    return (
      <div className="App App-header">
        <h2>{this.state.headerState}</h2>
        <h2>{this.state.contentState}</h2>
        <h2>{this.props.headerProp}</h2>
        <h2>{this.props.contentProp}</h2>

        <h3>Array : {this.props.propArray}</h3>
        <h3>Bool : {this.props.propBool ? "True" : "False"}</h3>
        <div>
          <button onClick={this.setStateHandler}>Set State</button>
          <h4>State Array: {this.state.myData}</h4>
        </div>
        <Header />
        <Content />
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i}
                                                          data={person} />)}
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

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired
}

App.defaultProps = {

  propArray: [1, 2, 3, 4, 5],
  propBool: true
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

class TableRow extends Component {
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
