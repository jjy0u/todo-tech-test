//import React, { useState } from 'react'
import './Main.scss'
import InputBox from '../InputBox/InputBox'
import ToDoList from '../../containers/ToDoList/ToDoList'

const Main = (props) => {
    const {toDoArr,handleClick, handleCheck, handleSubmit} = props

  return (
    <div className='main'>
        <InputBox handleSubmit = {handleSubmit}/>
        <ToDoList toDoArr={toDoArr} handleClick={handleClick} handleCheck={handleCheck}/>
    </div>
  )
}

export default Main