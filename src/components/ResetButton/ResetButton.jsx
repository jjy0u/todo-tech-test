import React from 'react'
import './ResetButton.scss'

const ResetButton = (props) => {
    const {handleReset} = props
  return (
    <button onClick={handleReset}>Reset</button>
  )
}

export default ResetButton