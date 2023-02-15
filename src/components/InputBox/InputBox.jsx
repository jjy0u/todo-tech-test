import React from 'react'
import './InputBox.scss'

const InputBox = (props) => {
  const {handleSubmit} = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="input" name="to-do_input" placeholder="Add your task here..."/>
        <button type="submit" value="+">+</button>
      </form>
    </div>
  )
}

export default InputBox