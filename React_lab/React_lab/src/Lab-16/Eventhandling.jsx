import React from 'react'

function Eventhandling() {
  return (
    <>

    {/* <button onClick={() => {
        console.log("onclick using react");
    }}>Btn Clicked</button> */}

    <button onDoubleClick={() => {
        console.log("onDoubleCLick using react");
    }}>Btn Clicked</button>
    </>
  )
}

export default Eventhandling