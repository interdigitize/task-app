import React from 'react';
import './TitleAndButtons.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const TitleAndButtons = (props) => {
  return (
      <Row className="show-grid">
        <Col xs={12} sm={8}><h1>Tasks</h1></Col>
        <Col xs={12} sm={4} id="rightJustify">
          <Button onClick={props.addTask} id="addTask">Add Task</Button>
          <Button onClick={props.saveTaskList} id="save">Save</Button>
        </Col>
      </Row>
  )
}

export default TitleAndButtons;
