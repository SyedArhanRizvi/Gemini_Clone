import React, { useContext } from 'react'
import { CounterContext, CounterProvider } from '../store/Counter'

function Counter() {
        //  const counterVAr = useContext(CounterContext);
         const {count} = useContext(CounterContext);
  return (
    <div>
      <h1>Count is : {count}</h1>
    </div>
  )
}

export default Counter
