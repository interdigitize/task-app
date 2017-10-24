import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Task from './Task';

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map((task, index) =>
        <Row key={index}>
          <Col xs={12}>
            <Task task={task}
              taskIndex={index}
              editTask={props.editTask}
              deleteTask={props.deleteTask}
            />
          </Col>
        </Row>)}
    </div>
  )
}

export default TaskList;
