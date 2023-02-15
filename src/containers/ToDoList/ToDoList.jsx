import React from 'react'
import './ToDoList.scss'
import ToDo from '../../components/ToDo/ToDo'
import { useState } from 'react'

const ToDoList = (props) => {
  const {toDoArr, handleClick} = props

  const [checkStatus, setCheckStatus] = useState("unchecked")


  const handleCheck = (event) => {
    console.log(event.target.value)
    if(checkStatus=== "unchecked"){
        setCheckStatus("checked")
    } else {
        setCheckStatus("unchecked")
    }
  }

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
    <div className='todo-container'>{toDoJSX}</div>
  )
}

export default ToDoList