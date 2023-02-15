import React from 'react'
import './ToDoList.scss'
import ToDo from '../../components/ToDo/ToDo'

const ToDoList = (props) => {
  const {ToDoArr, handleClick, handleCheck} = props
  const toDoJSX = ToDoArr.map((toDo, index) => {
    return ( <ToDo 
        toDoText = {toDo}
        handleClick = {handleClick}
        handleCheck = {handleCheck}
        key = {index}
        />
    )
})
  return (
    <div>{toDoJSX}</div>
  )
}

export default ToDoList