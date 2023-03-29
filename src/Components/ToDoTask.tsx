import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
  task: ITask;
  deleteTask(tasknameToDelete:string):void
}

const ToDoTask = ( {task, deleteTask} : Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskname}</span>
        <span>{task.deadline}</span>
      </div>
      <button onClick={()=>deleteTask(task.taskname)}>X</button>
      </div>
  );
}

export default ToDoTask;