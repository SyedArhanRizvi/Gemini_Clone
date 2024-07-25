import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import '../components/AddButton.css'

function AddButton({btnAdd}) {
  return (
    <div>
      <button onClick={btnAdd}><MdAddShoppingCart/></button>
    </div>
  )
}

export default AddButton
