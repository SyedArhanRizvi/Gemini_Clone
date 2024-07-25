import './App.css'
import Counter from './components/Counter'
import AddBtn from './components/AddBtn'
import DecreaseBtn from './components/DecreaseBtn'
import { createContext, useContext } from 'react'
import { CounterContext } from './store/Counter'
function App() {
  const counterState = useContext(CounterContext);
    console.log(counterState);
    
  return (
    <>
      <center>
        <Counter></Counter>
        <AddBtn></AddBtn>
        <DecreaseBtn></DecreaseBtn>
        

      </center>
    </>
  )
}

export default App
