import React from 'react'
import '../components/InputFields.css'
function InputFields({onchange, value}) {
  return (
    <div>
      <input type="text" className='searchInput' placeholder='Enter Your Product Name' onChange={onchange} value={value}/>
    </div>
  )
}

export default InputFields
