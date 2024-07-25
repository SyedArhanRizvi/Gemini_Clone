import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [text, setText] = useState("");
   const [number, setNumber] = useState('');
  const [task, setTask] = useState([]);
  const [cnt , setCnt] =useState(0);

   const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(text, number);
    const newTask ={
      id:cnt,
      text:text,
      number:parseInt(number)
    }

    setTask([...task,newTask]);
    setCnt(cnt+1);
    setText('');
    setNumber(0);

   }


   const handleInc =(taskID)=>{
        const update = task.map(e=>{
          if(taskID===e.id){
            console.log(e.number);
            return {
              ...task,
              number:e.number+1,
            }
          }

          return task;
        })
        // return task;
        setTask(update);
   };
  return (
    <>
   <div>
   <form action="" onSubmit={handleSubmit} >
      <input type="text" onChange={(e)=>setText(e.target.value) } value={text}/>
      <input type="text" onChange={(e)=>setNumber(e.target.value)} value={number}/>
      <button type='submit'>Submit</button>
    </form>
    {
      task.map((e,i)=>(
        <div>
          <div>{e.text} </div>
          <div>{e.number} </div> 
          <button onClick={()=>handleInc(e.id)}>Add</button>
          <button>-</button>
        </div>
      ))
    }
   </div>
    </>
  )
}

export default App
