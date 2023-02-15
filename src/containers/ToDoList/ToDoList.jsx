import React from 'react'
import './ToDoList.scss'
import ToDo from '../../components/ToDo/ToDo'

const ToDoList = (props) => {
  const {toDoArr, handleClick, handleCheck, checkStatus} = props
  const toDoJSX = toDoArr.map((toDo, index) => {
    return ( <ToDo 
        toDoText = {toDo}
        handleClick = {handleClick}
        handleCheck = {handleCheck}
        checkStatus = {checkStatus}
        key = {index}
        />
    )
})
  return (
    <div>{toDoJSX}</div>
  )
}

export default ToDoList