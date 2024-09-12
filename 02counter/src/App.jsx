import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[ counter , setCounter]= useState(true) 
 // let counter= 15
  const addvalue =()=>{
    console.log("value added ", Math.random());
    const removevalue = ()=>{
      setCounter(counter-1)
    }
  }
  return (
    <>
   <h1>sumit</h1>
   <h2>counter value:{counter}</h2>
   <button onClick={addvalue}>Add value</button>
   <br/>
   <button onClick={removevalue}>Remove Vlaue</button>
    </>
  )
}

export default App
