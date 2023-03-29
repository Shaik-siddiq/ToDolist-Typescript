import React,{FC, useState, ChangeEvent} from 'react';
import {ITask} from "./Interfaces"
import './App.css';
import ToDoTask from './Components/ToDoTask';

const App :FC =()=> {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setTodolist] = useState<ITask[]>([]);

  const changeHandler = (event:ChangeEvent<HTMLInputElement>): void=>{
 if(event.target.name === "task"){
  setTask(event.target.value);
  console.log(task);
 }else{
  setDeadline(Number(event.target.value));
  console.log(deadline);
 }
  }
  const clickHandler = (): void=>{
    const newtask = {taskname:task, deadline:deadline};
    setTodolist([...todolist, newtask]);
    console.log(todolist);
    setTask("");
    setDeadline(0);
  }

  const deleteTask = (tasknameToDelete:string):void =>{
    setTodolist(todolist.filter((task)=>{
        return task.taskname !== tasknameToDelete
    }))
    console.log(todolist);
  }

  return (
    <div className="App">
     <div className="header">
      <div className="inputcontainer">
        <input type="text" name="task" placeholder="add task" value={task} onChange={changeHandler} />
        <input type="number" name="deadline" placeholder="no. of days" value={deadline} onChange={changeHandler} />
      </div>
      <button onClick={clickHandler}>Add Task</button>
     </div>
     <div className="todolist">
      {todolist.map((task:ITask, key:number)=>{
      return <ToDoTask key={key} task={task} deleteTask={deleteTask} />
      })}
     </div>
    </div>
  );
}

export default App;
