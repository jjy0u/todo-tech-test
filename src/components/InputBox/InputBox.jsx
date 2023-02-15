import React from 'react'
import './InputBox.scss'

const InputBox = (props) => {
  const {handleSubmit} = props
  return (
    <div>
      <form>
        <input type="text" id="input" name="to-do_input" placeholder="Add your task here..."/>
        <input type="button" value="+" onClick={handleSubmit}/>
      </form>
    </div>
  )
}

export default InputBox