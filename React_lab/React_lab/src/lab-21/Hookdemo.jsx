import React from 'react'
import { useState } from 'react'
function Hookdemo() {
    const [count,setcount]=useState(0)

  return (
    <>
    <h2>count:{count}</h2>
    <button onClick={()=>{
        setcount(count+5)
    }}>Incre</button><br/>
     <button onClick={()=>{
        setcount(count-5)
    }}>decre</button><br/>
    <button onClick={()=>{
        setcount(0)
    }}>ref</button><br/>
    
    </>
  )
}

export default Hookdemo
