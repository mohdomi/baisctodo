import { useState } from 'react'
import {TodoInput} from "./components/TodoInputComponent.jsx"
import {Todos} from "./components/TodosComponent.jsx"
import './App.css'

function App() {

  const [todo , setTodos] = useState([]);
  
  fetch("http://localhost:3000/todos").then(async function(res){   
    const json = await res.json();
    console.log(json);
    setTodos(json);
  })



  return (<div>
      <TodoInput></TodoInput>
      <Todos tododetails={todo}></Todos>
    </div>

  )
}

export default App
