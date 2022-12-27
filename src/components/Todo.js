import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'

export default function Todo({ todos, completeTask, removeTask }) {
  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'complete-task-div tdiv' : 'task-div tdiv'} key={index}>
      <div className='todo-text'>{todo.text}</div>
      <div className='icons' key={todo.id}>
        <TiTick className='tik' onClick={() => { completeTask(todo.id) }} ></TiTick>
        <RiCloseCircleLine className='cross' onClick={() => { removeTask(todo.id) }}></RiCloseCircleLine>
      </div>
    </div>
  ))

  }