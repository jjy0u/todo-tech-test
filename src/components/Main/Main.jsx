//import React, { useState } from 'react'
import './Main.scss'
import { useState } from 'react'
import InputBox from '../InputBox/InputBox'
import ToDoList from '../../containers/ToDoList/ToDoList'

const Main = () => {

    const [toDo, setToDo] = useState([])
    const [checkStatus, setCheckStatus] = useState("unchecked")

    const handleSubmit = (event) => {
        event.preventDefault()
        setToDo(oldArray => [event.target[0].value,...oldArray])
        //event.target.reset()
    }

    const toDoCopy = [...toDo]

    const handleClick = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        toDoCopy.splice(toDoCopy.indexOf(event.target[0].value),1)
        setToDo(toDoCopy)
    }

    const handleCheck = () => {
        if(checkStatus== "unchecked"){
            setCheckStatus("checked")
        } else {
            setCheckStatus("unchecked")
        }
    }

  return (
    <div>
        <InputBox handleSubmit = {handleSubmit}/>
        {checkStatus && <ToDoList ToDoArr={toDo} handleClick={handleClick} handleCheck={handleCheck} checkStatus={checkStatus}/>}
    </div>
  )
}

export default Main