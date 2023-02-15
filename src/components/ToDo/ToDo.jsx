import React from 'react'
import './ToDo.scss'

const ToDo = (props) => {
    const {toDoText, handleClick, handleCheck, checkStatus} = props
  return (
    <div>
        <form className='to-do' onSubmit={handleClick}>
          <div className='to-do__div'>
            <input className='to-do__check' type="checkbox" id="toDo" name="ToDo" value={toDoText} onClick={handleCheck}/>
            <label htmlFor="toDo" className={checkStatus}> {toDoText} </label>
          </div>
            <button className='to-do__button' type="submit">x</button>
        </form>
    </div>
  )
}

export default ToDo