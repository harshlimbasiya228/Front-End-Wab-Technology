import React from 'react'
import { useState } from 'react'
import C from "./C"
function B(props) {
     const [input,setInput]=useState(" ")
  return (
    <>
    <h1>B Components</h1>
    <label htmlFor='name'>Name:</label>
    <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/><br/>
     <button onClick={()=>{props.setName(input)}}>Click</button>
         <C name={props.name} />
    </>
  )
}

export default B