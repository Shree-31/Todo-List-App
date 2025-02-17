import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue]= useState("")

    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value);

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' classname='todo-input' value= {value} placeholder='What is the task?' onChange ={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-button'>Add Task</button>
    </form>
  )
}
