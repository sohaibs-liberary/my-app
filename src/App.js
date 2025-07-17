import React, { useState } from 'react'

function App() {

  const [count , setcount ] = useState(0)
  return (
    <>

    <div>the count is {count}</div>
    <button  onClick={()=> {setcount(count+1)}} >this is update</button>
    </>
  )
}

export default App