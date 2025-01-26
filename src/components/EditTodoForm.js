import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value,setValue]= useState(task.task)

    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id);

        setValue("")
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' classname='todo-input' value= {value} placeholder='Update Task' onChange ={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-button'>Update</button>
    </form>
  )
}
