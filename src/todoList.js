import React, { Component } from 'react';

class TodoList extends Component {

  constructor() {
    super()
    this.state = {
      myTasks: []
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    var task = document.getElementById('task');
    var taskSize = this.state.myTasks.length;
    var myArray = [];

    if (taskSize === 0) {
      myArray = [];
    } else {
      myArray = this.state.myTasks.slice();
      console.log(myArray)
    }

    myArray.push(task.value);
    this.setState({ myTasks: myArray });
  }

  render() {
    return (
      <div>
        <p>TodoList</p>
        <input id="task" type="text" autoComplete="off" placeholder="Enter your task here" />
        <button onClick={this.handleButtonClick}>Add Task</button>
        <table>
          <tbody>
            {this.state.myTasks.map((task, i) => <TaskRow key={i} data={i, task} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

class TaskRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.data}</td>
      </tr>
    );
  }
}

export default TodoList;
