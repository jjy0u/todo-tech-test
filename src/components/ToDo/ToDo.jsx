import React from 'react'
import './ToDo.scss'

const ToDo = (props) => {
    const {toDoText, handleClick, handleCheck, checkStatus} = props
  return (
    <div>
        <form onSubmit={handleClick}>
            <input type="checkbox" id="toDo" name="ToDo" value={toDoText} onClick={handleCheck}/>
            <label htmlFor="toDo" className={checkStatus}> {toDoText} </label>
            <button type="submit">x</button>
        </form>
    </div>
  )
}

export default ToDo