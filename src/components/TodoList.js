import React from 'react'
import { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


export default function () {


  //State Array which hold all TODOS
  const [todos,setTodos]=useState([]);
  
  //Add Todo to list
  const addtask=task=>{
    if(!task.text){
        return
    }
    const newTodos=[task,...todos];
    setTodos(newTodos);
  } 

  //Remove todo from list
  const removeTask=id=>{
    let updatedTasks=[...todos].filter(task=>task.id!==id)
    setTodos(updatedTasks)

  }

  //Task is completed
  const completeTask=id=>{
    let updatedTasks=todos.map(todo=>{
        if(todo.id===id){
            todo.isComplete=true;
        }
        return todo;
    })
    setTodos(updatedTasks)
 
  }
    return (
    <div>
        <TodoForm addtask={addtask}></TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} > </Todo>
    </div>
  )
}
