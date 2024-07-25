import React from 'react'
import '../components/Card1.css'
import { FaRegHeart } from "react-icons/fa";

function Card1({img, rate, name, timing}) {
  return (
    <div className='card'>
      <div className="img"><img src={img} alt="" /></div>
      <div className="heart"><FaRegHeart /></div>
      <div className="details">
        <h1>{rate}</h1>
        <p>{name}</p>
      </div>
      <div className="timing">
        <p>{timing}</p>
      </div>
    </div>
  )
}

export default Card1
