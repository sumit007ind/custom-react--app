import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleclick(){
    setCount(count+1);
  }

  return (
    <>
   <div>
    <button incrementcount={handleclick}
    text="click me"/>
    {/* <card name="sumit sharma">
<h1>best web dev course</h1>
<p>hello  i am sumit sharma</p>
<div  >hello</div>
    </card> */}
    </div>
    </>
  )
}

export default App
