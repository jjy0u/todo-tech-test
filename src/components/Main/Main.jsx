//import React, { useState } from 'react'
import './Main.scss'
import InputBox from '../InputBox/InputBox'
import ToDoList from '../../containers/ToDoList/ToDoList'

const Main = () => {

    //const [toDo, setToDo] = useState()

    const toDoArr= ["1","2","3"]

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hi")
    }

    const handleClick = () => {
        console.log("hi")
    }

  return (
    <div>
        <InputBox handleSubmit = {handleSubmit}/>
        <ToDoList ToDoArr={toDoArr} handleClick={handleClick}/>
    </div>
  )
}

export default Main