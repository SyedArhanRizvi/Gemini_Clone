import React, { useContext } from 'react'
import { CounterContext } from '../store/Counter';
function AddBtn() {
  const {count , setCount} = useContext(CounterContext);
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Add</button>
    </div>
  )
}

export default AddBtn
