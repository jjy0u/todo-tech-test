//import React, { useState } from 'react'
import './Main.scss'
import InputBox from '../InputBox/InputBox'
import ToDoList from '../../containers/ToDoList/ToDoList'

const Main = (props) => {
    const {toDoArr,handleClick, handleCheck, checkStatus, handleSubmit} = props

  return (
    <div>
        <InputBox handleSubmit = {handleSubmit}/>
        <ToDoList toDoArr={toDoArr} handleClick={handleClick} handleCheck={handleCheck} checkStatus={checkStatus}/>
    </div>
  )
}

export default Main