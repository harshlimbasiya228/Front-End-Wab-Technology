import React, {  useState } from 'react'

function Calculater() {
    const [exp,setExp] = useState("")
    const [result,setResult] = useState("")
   const handleExp=(e)=>{
        if(e=='AC'){
          setExp("")
        }else if(e=='->'){
          setExp(String(exp.slice(0,-1)))
        }else if(e=='='){
          setExp(eval(exp))
        }else{
         setExp(exp+e)
        }
    }
  return (
   <>
    <div className="calculator">
        <input type='text' value={exp} disabled onChange={(e)=>setExp(e.target.value)}/>
        <div className="row1">
            <button onClick={()=>handleExp("7")}>7</button>
            <button onClick={()=>handleExp("8")}>8</button>
            <button onClick={()=>handleExp("9")}>9</button>
            <button onClick={()=>handleExp("/")}>/</button>
        </div>
        <div className="row2">
            <button onClick={()=>handleExp("4")}>4</button>
            <button onClick={()=>handleExp("5")}>5</button>
            <button onClick={()=>handleExp("6")}>6</button>
            <button onClick={()=>handleExp("*")}>*</button>
        </div>
        <div className="row3">
            <button onClick={()=>handleExp("1")}>1</button>
            <button onClick={()=>handleExp("2")}>2</button>
            <button onClick={()=>handleExp("3")}>3</button>
            <button onClick={()=>handleExp("-")}>-</button>
        </div>
        <div className="row4">
            <button onClick={()=>handleExp("AC")}>AC</button>
            <button onClick={()=>handleExp("0")}>0</button>
            <button onClick={()=>handleExp("->")}>DEL</button>
            <button onClick={()=>handleExp("+")}>+</button>
        </div>
        <div className="row5">
            <button onClick={()=>handleExp("=")}>=</button>
        </div>
    </div>
   
   </>
  )
}

export default Calculater