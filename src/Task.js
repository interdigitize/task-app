import React from 'react';
import { Panel } from 'react-bootstrap';
import './Task.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Task = (props) => {
  return (
    <Panel className="panel">
      <Row className="show-grid">
        <Col xs={10} sm={8}><span className="Task-title">{props.task}</span></Col>
        <Col xs={2} sm={4}><i className="fa fa-trash-o delete" onClick={() => (props.deleteTask(props.taskIndex))}></i></Col>
      </Row>
    </Panel>
  )
}

export default Task;
