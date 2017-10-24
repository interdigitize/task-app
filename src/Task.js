import React from 'react';
import { Panel } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ContentEditable from 'react-contenteditable';
import './Task.css';

var Task = (props) => {
  // var focus = props.taskIndex === 0 ? true : false;
  /* What I was trying about doesn't work since I used ContentEditable rather than an input.
  I was reading here about a fix, https://reactjs.org/docs/refs-and-the-dom.html,
  but ran out of time I can spend on it at the moment.*/

    return (
      <Panel className="panel">
        <Row className="show-grid">
          <Col xs={10} sm={8}>
            <ContentEditable
              // autoFocus={focus}
              id={props.taskIndex}
              className="Task-title"
              html={props.task}
              disabled={false}
              onChange={(e) => props.editTask(e.target.value, props.taskIndex)}
            />
          </Col>
          <Col xs={2} sm={4}>
            <i
              className="fa fa-trash-o delete"
              onClick={() => (props.deleteTask(props.taskIndex))}>
            </i>
          </Col>
        </Row>
      </Panel>
    )
}

export default Task;
