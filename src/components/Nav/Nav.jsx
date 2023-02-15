import React from 'react'
import ResetButton from '../ResetButton/ResetButton'
import './Nav.scss'

const Nav = (props) => {
  const {handleReset} = props
  return (
    <div>
        <h1>My Todos</h1>
        <ResetButton handleReset={handleReset}/>
    </div>
  )
}

export default Nav