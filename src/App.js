import React, { useState, useEffect } from 'react'
import Navbar from './components/navbar'

function App() {

  const [count, setcount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setcolor] = useState(0)
  
  useEffect(() => {

    alert('color was change')
    setcolor(color +1)
  }, [count])
    
  return (

    <>
      <Navbar color={"navy" + "blue" + color} />

      <div>the count is {count}</div>
      <button onClick={() => { setcount(count + 1) }} >this is update</button>
    </>
  )
}

export default App