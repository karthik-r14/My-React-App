import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import TodoList from "./components/todoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerState: "Header From state",
      contentState: "Content from state",
      myData: ['Hello'],
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
          }],
      incrementValue: 0
    }

    this.setNewNumber = function () {
      this.setState({ incrementValue: this.state.incrementValue + 1 })
    };
    this.setStateHandler = this.setStateHandler.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    this.simpleFunc = function () {
      alert("Hello world");
      console.log("Print Hello World on console.");
    };
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  // setNewNumber() {
  //   this.setState({ incrementValue: this.state.incrementValue + 1 })
  // }

  setStateHandler() {
    var item = "setState..."
    var myArray = this.state.myData.slice();
    myArray.push(item);
    this.setState({ myData: myArray })
  };

  findDomNodeHandler() {
    var myDiv = document.getElementById('myDiv');
    var red = document.getElementById('Red');
    var green = document.getElementById('Green');
    var blue = document.getElementById('Blue');

    ReactDOM.findDOMNode(myDiv).style.color = '#' + red.value
      + green.value + blue.value;

  }

  // simpleFunc() {
  //   alert("Hello world");
  //   console.log("Print Hello World on console.");
  // }

  render() {
    return (
      <div className="App App-header">
        <h2>{this.state.headerState}</h2>
        <h2>{this.state.contentState}</h2>
        <h2>{this.props.headerProp}</h2>
        <h2>{this.props.contentProp}</h2>

        <div className="double">
          <h1>SAMPLE DATA</h1>
          <h3>Array : {this.props.propArray}</h3>
          <h3>Bool : {this.props.propBool ? "True" : "False"}</h3>
          <h3>Number : {this.props.propNumber}</h3>
          <h3>String : {this.props.propString}</h3>
        </div>

        <div>
          <button onClick={this.setNewNumber}>INCREMENT</button>
          <ContentDemo myNumber={this.state.incrementValue}></ContentDemo>
        </div>

        <div>
          <button onClick={this.setStateHandler}>Set State</button>
          <h4>State Array: {this.state.myData}</h4>
        </div>

        <div>
          <button onClick={this.forceUpdateHandler}>Force Update</button>
          <h4>Random number: {Math.random().toPrecision(3)}</h4>
        </div>

        <div>
          <button onClick={this.simpleFunc}>Show Alert</button>
        </div>

        <div>
          <div id="myDiv">color</div>

          <input id="Red" type="text" name="Red" placeholder="Red"></input>
          <input id="Green" type="text" name="Green" placeholder="Green"></input>
          <input id="Blue" type="text" name="Blue" placeholder="Blue"></input>
          <button onClick={this.findDomNodeHandler}>Change color</button>

        </div>

        <Header />
        <Content />
        <ContentDemo />
        <TodoList/>

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

class ContentDemo extends Component {
  componentWillMount() {
    console.log('Component WILL MOUNT.')
  }

  componentDidMount() {
    console.log('Component DID MOUNT.')
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS.');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true;
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Component WILL UPDATE')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component DID UPDATE')
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT')
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }

}

App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  myNumber: PropTypes.number
}

App.defaultProps = {

  propArray: [1, 2, 3, 4, 5, 6],
  propBool: true,
  propNumber: 18,
  propString: "I am a human.",
  myNumber: 14,
  headerProp: "Header Prop",
  contentProp: "Content Prop"
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
