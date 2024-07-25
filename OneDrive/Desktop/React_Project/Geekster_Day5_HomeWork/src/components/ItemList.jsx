import React from 'react'
import '../components/ItemList.css'
import { LuDelete } from "react-icons/lu";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function ItemList({name, price, onDecrease, onIncrease}) {
  return (
    <div className='mainDiv'>
      <div className='arr'>
        <div className='arrDiv'>
        <IoIosArrowUp onClick={onIncrease} className='a1'/>
        <IoIosArrowDown onClick={onDecrease} className='a2'/>
      </div><h1 className='h1'>{name}</h1></div>
      <div><h1 className='h2'>{price}</h1></div>
      <div><button><LuDelete /></button></div>
    </div>
  )
}

export default ItemList
