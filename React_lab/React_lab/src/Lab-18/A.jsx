import React from 'react'
import B from './B'
function A(props) {
  return (
    <>
    <h1>A Component</h1>
    <B name={props.name} setName={props.setName}/>
    </>
  )
}

export default A