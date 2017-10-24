import React from 'react';
import { Panel } from 'react-bootstrap';
import './Task.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ContentEditable from 'react-contenteditable';

const Task = (props) => {
  // if (prop.taskIndex === 0) {
  //   document.querySelector('div.x').id = 'y';
  //   document.getElementById("test").focus();
  // }
    return (
      <Panel className="panel">
        <Row className="show-grid">
          <Col xs={10} sm={8}>
            <ContentEditable
              className="Task-title"
              html={props.task}
              disabled={false}
              onChange={(e) => props.editTask(e.target.value, props.taskIndex)} 
            />
            {/* <span contentEditable="true">{props.task}</span> */}
          </Col>
          <Col xs={2} sm={4}><i className="fa fa-trash-o delete" onClick={() => (props.deleteTask(props.taskIndex))}></i></Col>
        </Row>
      </Panel>
    )
}

export default Task;
