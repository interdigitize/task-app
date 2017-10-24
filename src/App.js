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
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
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
        console.log(error);
      });
    this.disableSave();
  }

  addTask() {
    var addTask = this.state.tasks;
    addTask.unshift('A new something to do. Click to edit.');
    this.setState({tasks: addTask});
    this.enableSave();
  }

  deleteTask(taskIndex) {
    var deleteTask = this.state.tasks;
    deleteTask.splice(taskIndex, 1);
    this.setState({tasks: deleteTask});
    this.enableSave();
  }

  saveTaskList() {
    console.log('saved!');
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

  disableSave(){
    document.getElementById('save').disabled = true;
  }

  enableSave() {
    document.getElementById('save').disabled = false;
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
          />
        </Grid>
      </div>
    );
  }
}

export default App;
