import React from 'react'
import D from './D'
function C(props) {
  return (
  <>
    <h1>C Component</h1>
     <D name={props.name} />
    </>
  )
}

export default C