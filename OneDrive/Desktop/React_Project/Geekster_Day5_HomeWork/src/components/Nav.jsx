import React from 'react'
import '../components/Nav.css'
import { TbShoppingCartBolt } from "react-icons/tb";

function Nav({count}) {
  console.log(count);
  return (
    <nav>
      <h1>Grocery Bud</h1>
      <div className='cartHub'><TbShoppingCartBolt className='cart' /><p>{count}</p></div>
      
    </nav>
  )
}

export default Nav
