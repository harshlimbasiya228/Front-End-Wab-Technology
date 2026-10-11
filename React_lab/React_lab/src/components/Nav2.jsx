import React from 'react'
import {Link} from 'react-router-dom'
function Nav2() {
  return (
    <>
    <div className="nevigation">
    <nav>
    <button><Link to="/">Home</Link>&nbsp;</button> 
          <button><Link to="/about">About</Link>&nbsp;</button>
          <button><Link to="/gujarat">Places</Link>&nbsp;</button>
    <button><a href="./gallery.html">Gallery</a>&nbsp;</button>
    <button><a href="./travel.html">Travel Info</a>&nbsp;</button>
    <button><a href="./contactpage.html">Contact</a>&nbsp;</button>
   </nav>
   <hr/>
  </div>
    </>
  )
}

export default Nav2