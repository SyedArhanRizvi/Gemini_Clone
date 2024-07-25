import React from 'react'
import '../components/PriceFields.css'
function PriceFields({onchange, value}) {
  return (
    <div>
      <input type="number" className='priceData' placeholder='Price*'onChange={onchange} value={value}/>
    </div>
  )
}

export default PriceFields
