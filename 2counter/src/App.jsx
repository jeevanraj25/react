import { useState } from 'react'

import './App.css'

function App() {
 
  const [counter,setcounter] =useState(0);

  const addvalue = () =>{
    
    setcounter((precounter)=> precounter+1);
    setcounter((precounter)=> precounter+1);
    setcounter((precounter)=> precounter+1);
    setcounter((precounter)=> precounter+1);
  }

  const removevalue = () =>{
    setcounter((precounter)=> precounter-1);
    setcounter((precounter)=> precounter-1);
    setcounter((precounter)=> precounter-1);
    setcounter((precounter)=> precounter-1);
  }


  return (
    <>
    <h1>Learning React hooks {counter}</h1>
     <h2>Counter value {counter}</h2>
     <button onClick={addvalue}>Add value</button>
     <button onClick={removevalue}>Remove value</button>{" "}
     <p>footer :{counter}</p>
    </>
  )
}

export default App
