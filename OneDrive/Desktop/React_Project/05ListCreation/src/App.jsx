

function App() {
    // let foods = ["Banana", "Mango", "Grapes", "Water Melon", "Orange"]
    let foods = []

  return (
    <>
  
    {foods === 0 ?
     (<h1>Dosn't Content Any Items</h1>) :
     <ul className="list-group">
     {foods.map((food)=>{
      return <li key={food}  className="list-group-item">{food}</li>
     })}
     }

 {/* {{foods.map((food)=>{
    return <li key={food}  className="list-group-item">{food}</li>
  })} */} 
</ul>
    </>
  )
}

export default App
