import React from 'react'
import './InputBox.scss'

const InputBox = (props) => {
  const {handleSubmit} = props
  return (
      <form className='form' onSubmit={handleSubmit}>
        <input className='form__input' type="text" id="input" name="to-do_input" placeholder="Add your task here..."/>
        <button className='form__button' type="submit" value="+">+</button>
      </form>
  )
}

export default InputBox