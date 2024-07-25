import { useState } from "react";
import "./App.css";
import { MdOutlineAddComment } from "react-icons/md";
import Nav from "./components/Nav";
import InputFields from "./components/InputFields";
import PriceFields from "./components/PriceFields";
import AddButton from "./components/AddButton";
import ItemList from "./components/ItemList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemCounting, setItemCounting] = useState(items.length);
  


  // Get Input Name :
  const itemInputName = (e)=>{
    setItemName(e.target.value);
  }

  // Get Input Price :

  const itemInputPrice = (e)=>{
    setItemPrice(e.target.value);
  }
  const defaultList = { name: itemName, price: itemPrice };
  const handleAddBtn = () => {
    if(itemName == "" || itemPrice == "") {
      toast.warn('🦄 Please fill all required fields...', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
        });
    } else {
    setItems([...items, defaultList]);
    setItemCounting(items.length + 1)
    setItemName("");
    setItemPrice("");
    toast.success('Successfully Added', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
      });
  }
  };
   // Get Total Items :
   const arrIncrease = ()=>{
    setItemCounting((items.length) + 1)
   }
   const arrDecrease = ()=>{
    setItemCounting(items.length - 1)
   }
    
    

  return (
    <section>
      <Nav count={itemCounting}></Nav>
      <ToastContainer />
      <center className="cartDiv">
      
        <InputFields onchange={itemInputName} value={itemName}></InputFields>
        <PriceFields onchange={itemInputPrice} value={itemPrice}></PriceFields>
        <AddButton btnAdd={handleAddBtn}></AddButton>

        <div className="bodyCont">
          
          {items &&
            items.map((prod) => {
              return <ItemList key={prod.name} name={prod.name} price={prod.price} onIncrease={arrIncrease} onDecrease={arrDecrease}/>;
            })}
        </div>
      </center>
    </section>
  );
}

export default App;
