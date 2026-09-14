import React, { useState } from 'react'

const counter = () => {
    const [count , setcount] = useState(0);
  return (
      <>
    <div>
        <button className='text-2xl p-3 bg-yellow-300 cursor-alias' onClick={()=>setcount(count+1)}>Counter:{count}</button>
    </div>
      </>
  )
}

export default counter