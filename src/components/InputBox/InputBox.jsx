import React from 'react'
import './InputBox.scss'

const InputBox = (props) => {
  const {handleSubmit} = props
  return (
    <div>
      <input type="text" id="input" name="to-do_input" placeholder="Add your task here..."/>
      <input type="submit" value="+" onSubmit={handleSubmit}/>
    </div>
  )
}

export default InputBox