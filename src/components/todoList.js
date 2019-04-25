import React, { Component } from 'react';
import TaskRows from "./taskRows";

class TodoList extends Component {

  constructor() {
    super()
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      myTasks: []
    }
  }

  handleButtonClick() {
    let task = document.getElementById('task');

    if (task.value.toString().trim() === "") {
      alert("Task should not be empty.Please try again!")
      return;
    }

    let taskSize = this.state.myTasks.length;
    let myArray;

    if (taskSize === 0) {
      myArray = [];
    } else {
      myArray = this.state.myTasks.slice();
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
        <TaskRows data={this.state.myTasks} />
      </div>
    );
  }
}

export default TodoList;
