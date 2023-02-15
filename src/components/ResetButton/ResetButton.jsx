import React from 'react'
import './ResetButton.scss'

const ResetButton = (props) => {
    const {handleReset} = props
  return (
    <button className='reset' onClick={handleReset}>Reset</button>
  )
}

export default ResetButton