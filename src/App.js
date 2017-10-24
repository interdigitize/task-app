import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import TaskList from './TaskList';
import TitleAndButtons from './TitleAndButtons';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ['buy milk', 'walk the dog', 'task'],
      alertVisible: false,
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.saveTaskList = this.saveTaskList.bind(this);
    this.dismissAlert = this.dismissAlert.bind(this);
  }

  componentDidMount() {
    axios.get('http://cfassignment.herokuapp.com/Kamie/tasks')
      .then((response) => {
        this.setState({tasks: response.data.tasks});
      })
      .catch((error) => {
        this.setState({alertVisible: "errorGET"});
        console.error(error);
      });
    this.disableSave();
  }

  addTask() {
    var tasks = this.state.tasks;
    tasks.unshift('A new something to do.'); //need to add focus
    this.setState({tasks: tasks});
    this.enableSave();
  }

  deleteTask(taskIndex) {
    var tasks = this.state.tasks;
    tasks.splice(taskIndex, 1);
    this.setState({tasks: tasks});
    this.enableSave();
  }

  editTask(editedTask, taskIndex) {
    var tasks = this.state.tasks;
    tasks[taskIndex] = editedTask;
    this.setState({tasks: tasks});
    this.enableSave();
  }

  saveTaskList() {
    axios.post('http://cfassignment.herokuapp.com/Kamie/tasks', {
      tasks: this.state.tasks
    })
    .then((response) => {
      this.setState({alertVisible: 'successPOST'});
    })
    .catch((error) => {
      this.setState({alertVisible: "errorPOST"});
      console.error(error);
    });
  }

  //Enabling save this way allows for potentially resaving what has been saved,
  //for instance if you add a task then delete it, save will still be enabled.
  //I am choosing to do it this way and prioritize time over API calls because
  //comparing equality of arrays, in this case persistant tasks and state tasks,
  //before every rerender is time expensive. If you have a recommendation on how
  //you like to handle it, I would like to hear about it.
  enableSave() {
    document.getElementById('save').disabled = false;
  }
  disableSave(){
    document.getElementById('save').disabled = true;
  }


  customAlert(style, message) {
    var alert = (
      <Alert bsStyle={style} onDismiss={this.dismissAlert}>
        <strong>{message}</strong>
      </Alert>
    )
    return alert;
  }

  dismissAlert() {
    this.setState({alertVisible: false});
  }

  render() {
    var alert;
    switch (this.state.alertVisible) {
      case 'successPOST':
        alert = this.customAlert('success', 'Tasks saved successfully.');
        break;
      case 'errorPOST':
        alert = this.customAlert('danger', 'Sorry, there was an error. Please try again.');
        break;
      case 'errorGET':
        alert = this.customAlert('danger', 'Sorry, there was an error retrieving your tasks. Try reloading the page.');
        break;
      default:
    }

    return (
      <div className="App">
        <Navbar />
        <Grid>
          <TitleAndButtons
            addTask={this.addTask}
            saveTaskList={this.saveTaskList}
          />
          {alert}
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
