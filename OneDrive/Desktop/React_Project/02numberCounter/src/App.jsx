import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //  let like = document.querySelector(".likeIncrease");
  //  let dislike = document.querySelector(".likeDicrease");


  const [like , setLike] = useState(0);
  //  let likCount = 0
  const [dis, setDis] = useState(0);
  //  like.addEventListener("click", ()=>{
  //   likCount++;
  //   console.log(likCount);

  //  });
  let increase = ()=>{
    setLike((prev)=> prev+1);
    console.log(likCount);

    let h1 = document.createElement("h1").innerText = likCount;
    like.appendChild(h1);
  }
  let discrease = ()=>{
    // likCount--;
    setDis((prev)=> prev-1);
    // setDis(dis--);
    console.log(likCount);
  }

  return (
    <section class="body">
      <div className="likeIncrease" onClick={increase}>
        <h1>{like}</h1>
      </div>
      <div className="likeDicrease" onClick={discrease}>
        <h1>{dis}</h1>
      </div>
    </section>
  )
}

export default App
