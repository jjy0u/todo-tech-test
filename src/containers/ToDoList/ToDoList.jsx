import React from 'react'
import './ToDoList.scss'
import ToDo from '../../components/ToDo/ToDo'

const ToDoList = (props) => {
  const {ToDoArr, toDoText, handleClick} = props
  const toDoJSX = ToDoArr.map((toDo) => {
    return ( <ToDo 
        toDoText = {toDoText}
        handleClick = {handleClick}
        />
    )
})
  return (
    <div>{toDoJSX}</div>
  )
}

export default ToDoList