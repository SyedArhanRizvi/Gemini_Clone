import { useState } from "react"
import Arhan from "./components/Arhan"
import Arman from "./components/Arman"

function App() {
  // let isLogIn = true;
  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(0);
  let incrementFunc = ()=>{
    setCount(count +1);
  }
  
  return (
     <>
    
   {/* {isLogIn ? <button> Login </button> : <button> Logout </button>} */}
   {/* <Arhan props={count}/>
   <PrateekSir props={count} val={setCount}/> */}
   <Arhan count={count} increment={incrementFunc}></Arhan>
   <Arman count={count}></Arman>
  
  </>
  )
}

// function Arhan({props}){

  
//     return (
//       <div>
//         <h1>Arhan Count is {props}</h1>
//       </div>
//     )
// }

// function PrateekSir({props, val}){
 

//   return(
//     <div>
//       <h1>PrateekSir Count is {props}</h1>
//       <button onClick={()=>val(props + 1)}>PrateekSir++</button>
//     </div>
//   )
// }

export default App
