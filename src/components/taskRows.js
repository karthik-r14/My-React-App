import React, { Component } from 'react';

class TaskRows extends Component {
  constructor() {
    super()
    this.state = {
      allTasks: [],
      deletedTasks: []
    }
  }

  componentWillReceiveProps(props) {
    var taskArray = this.state.allTasks.slice();

    var deletedTaskSize = this.state.deletedTasks.length;

    if (deletedTaskSize === 0) {
      this.setState({ allTasks: this.props.data });

    } else {
      var deletedTaskArray = this.state.deletedTasks.slice();
      var index;
      var activeTasks = [];
      for (index = 0; index < taskArray.length; ++index) {
        if (!this.state.deletedTasks.includes(taskArray[index]))
          activeTasks.push(taskArray[index])
      }
      this.setState({ allTasks: activeTasks });
    }
  }

  handleDeleteButtonClick(taskIndex) {
    var taskArray = this.state.allTasks.slice();
    this.state.deletedTasks.push(taskArray[taskIndex])

    var index;
    var tempArray = [];
    for (index = 0; index < taskArray.length; ++index) {
      if (!this.state.deletedTasks.includes(taskArray[index]))
        tempArray.push(taskArray[index])
    }

    this.setState({ allTasks: tempArray });
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.allTasks.map((task, i) =>
            <tr>
              <td>{i + 1}</td>
              <td>{task} </td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={this.handleDeleteButtonClick.bind(this, i)}>Delete</button>
              </td>
            </tr>)}
        </tbody>
      </table>
    );
  }
}

export default TaskRows;
