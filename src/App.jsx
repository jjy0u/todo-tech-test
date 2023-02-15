import { useState } from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
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

  const handleCheck = (event) => {
      console.log(event.target.value)
      if(checkStatus=== "unchecked"){
          setCheckStatus("checked")
      } else {
          setCheckStatus("unchecked")
      }
  }
  return (
    <div className="App">
      <Nav/>
      <Main handleSubmit = {handleSubmit} toDoArr={toDo} handleClick={handleClick} handleCheck={handleCheck} checkStatus={checkStatus}/>
    </div>
  );
}

export default App;
