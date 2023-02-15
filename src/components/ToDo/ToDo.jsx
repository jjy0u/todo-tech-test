import React from 'react'
import './ToDo.scss'

const ToDo = (props) => {
    const {toDoText, handleClick, handleCheck, checkStatus} = props
  return (
    <div>
        <input type="checkbox" id="toDo" name="ToDo" value="ToDo" onClick={handleCheck}/>
        <label htmlFor="toDo" className={checkStatus}> {toDoText} </label>
        <button onClick={handleClick}>x</button>
    </div>
  )
}

export default ToDo