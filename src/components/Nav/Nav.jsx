import React from 'react'
import ResetButton from '../ResetButton/ResetButton'
import './Nav.scss'

const Nav = (props) => {
  const {handleReset} = props
  return (
    <div className='nav'>
        <h1 className='nav__title'>My Todos</h1>
        <ResetButton handleReset={handleReset}/>
    </div>
  )
}

export default Nav