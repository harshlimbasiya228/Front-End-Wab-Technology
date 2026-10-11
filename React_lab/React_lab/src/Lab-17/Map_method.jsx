import React from 'react'

function Map_method() {
    let arr =[1,2,3,4,5]
  return (
   <>
    <ul>
        {
            arr.map((s , index)=>{
                return(
                    <li key={index}>{s}</li>
                )
            })
        }
    </ul>
   </>
  )
}

export default Map_method