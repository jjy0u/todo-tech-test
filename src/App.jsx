import { useState } from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
  const [toDo, setToDo] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
      if (event.target[0].value == ""){
        alert("please enter a todo")
      } else {
        setToDo(oldArray => [event.target[0].value,...oldArray])
      }
      //event.target.reset()
  }

  const toDoCopy = [...toDo]

  const handleClick = (event) => {
      event.preventDefault()
      console.log(event.target[0].value)
      toDoCopy.splice(toDoCopy.indexOf(event.target[0].value),1)
      setToDo(toDoCopy)
  }

  const handleReset = (event) => {
   setToDo([])
}


  return (
    <div className="App">
      <Nav handleReset={handleReset}/>
      <Main handleSubmit = {handleSubmit} toDoArr={toDo} handleClick={handleClick}/>
    </div>
  );
}

export default App;
