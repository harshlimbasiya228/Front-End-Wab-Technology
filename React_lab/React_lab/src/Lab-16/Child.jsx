import React from 'react'

function Parent({name,age}){
  return(
    <>
     <h2>name:{name}</h2>
   <h2>age:{age}</h2>
    </>
  )
}

function Child() {
  return (
   <>
  <Parent name="Harsh" age={19}/>
   </>
  )
}

export default Child