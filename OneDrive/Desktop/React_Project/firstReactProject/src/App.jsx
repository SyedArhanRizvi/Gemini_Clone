import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/componenet/Card'
Card

function App() {
  let [count, setCount] = useState(0);

  // let count = 0;
  let increase = ()=>{
    // count++;
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <h1 className='bg-green-800 p-4 rounded-md mb-4'>Ya Ali a.s Madad</h1>
      <button className='mb-6' onClick={increase}>Click Me {count}</button>
      <Card /> <h1>{count}</h1>
    </>
  )
}

export default App
