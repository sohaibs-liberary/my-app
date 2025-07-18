import React, { useEffect } from 'react'

function Navbar({ color, setcolor, count }) {


  // case 1: run on every render
  useEffect(() => {
    alert('hye!  Is was run on every render')
  })

  //case 2: run only on first render
  useEffect(() => {


    alert('hye! this is my page , this is a firdt render')


  })
  //case 3 : run only when certain value change

  useEffect(() => {

    alert('this is run when color is change')

  }, [color])

  useEffect(() => {
    alert('this is new count')
    setcolor(color + 1)
  }, [count])


  useEffect(() => {

    alert('this is run when color is change')
    return () => {
      alert("this is a error")
    }
  })

  return (
    <div>
      this is a  navbar color is {color} heheheheheehehe..............
    </div>
  )
}

export default Navbar;



/*import Reactl, {useEffect,useState}  from 'react'

function Navbar({ color }) {
  const [count, setCount] = useState(0);
  const [currentColor, setColor] = useState(color);

  useEffect(() => {
    alert('Hey! This runs on every render');
  });

  useEffect(() => {
    alert('This runs only on first render');
  }, []);

  useEffect(() => {
    alert('This runs when color prop changes');
  }, [color]);

  useEffect(() => {
    alert('This runs when count changes');
    setColor(currentColor + 1);
  }, [count]);

  return (
    <div>
      This is a navbar. Color is {currentColor}. Count is {count}.
    </div>
  );
}

export default Navbar

*/