import React from 'react'
import './Main.scss'
import InputBox from '../InputBox/InputBox'
import ToDoList from '../../containers/ToDoList/ToDoList'

const Main = (props) => {
    const {handleSubmit} = props
  return (
    <div>
        <InputBox handleSubmit = {handleSubmit}/>
        <ToDoList/>
    </div>
  )
}

export default Main