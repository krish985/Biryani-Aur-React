import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCount] = useState(15)  // using hooks

  const addCount = ()=>{
  
    setCount(counter +1)
    
  }
  const removeCount = ()=>{
    
    setCount(counter-1)
    
    
  }
  return (
    <>
      
      <h1>React Counter Project</h1>
      <h2>Number Of Count : {counter}</h2>
      <button onClick={addCount}>Add Count</button><br /><br />
      <button onClick={removeCount}>Remove Count</button>
      <p>Number Of Count :{counter} </p>
      
    </>
  )
}

export default App
