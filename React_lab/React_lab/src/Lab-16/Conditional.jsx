import React from 'react'

function Conditional() {
    const happy=false;
  return (
    <>
        {happy && <h2>I am happy</h2>}
        {!happy && <h4>I am not happy</h4>}
        
        {/* {(happy )? <h1>I am happy</h1> :<h1>I am not Happy</h1>} */}

    </>
  )
}

export default Conditional