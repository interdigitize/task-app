import React from 'react';
import Task from './Task';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const TaskList = (props) => {
  return (
    <div>
      {props.tasks.map((task, index) =>
        <Row key={index}>
          <Col xs={12}>
            <Task task={task} taskIndex={index} deleteTask={props.deleteTask}/>
          </Col>
        </Row>)}
    </div>
  )
}

export default TaskList;
