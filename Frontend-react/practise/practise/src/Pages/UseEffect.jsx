import React, { useState } from 'react'
import { useEffect } from 'react';
const UseEffect = () => {
    useEffect(()=>
    {
        console.log("hello this is use effect");
    },[])

  return (
      <>
      <h1>Hello</h1>
      </>
  )
}

export default UseEffect;