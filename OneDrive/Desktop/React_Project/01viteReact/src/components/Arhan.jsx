import React from 'react'
import { useState } from 'react'

export default function Arhan({count, increment}) {
    
  return (
    <div>
      <h1>Arhan Count is {count}</h1>
      <button onClick={increment}>Arhan++</button>
    </div>
  )
}
