import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [width, setWidht] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      {
        width <= 99 ? setWidht((prev) => prev + 1) : clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [width]);
  return (
    <>
      <div className="outerDiv">
      
          <div style={ {position:"absolute", height :"100%", backgroundColor :"green", width:`${width}%`}}><p style={{ color: width < 50 ? "black" : "white" }}>{width}</p></div>
        
      </div>
    </>
  );
}

export default App;
