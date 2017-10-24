import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import TaskList from './TaskList';
import TitleAndButtons from './TitleAndButtons';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ['buy milk', 'walk the dog', 'task'],
    }
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  // componentDidMount() {
  //   axios.get('http://cfassignment.herokuapp.com/Kamie/tasks')
  //     .then(function (response) {
  //       this.setState({tasks: response});
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  addTask() {
    console.log('clicked');
    var addedTask = this.state.tasks;
    addedTask.unshift('A new something to do. Click to edit.');
    this.setState({tasks: addedTask});
    document.getElementById('save').disabled = false;
  }

  deleteTask(theTask) {
    console.log('delete', theTask)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Grid>
          <TitleAndButtons
            addTask={this.addTask}
          />
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
