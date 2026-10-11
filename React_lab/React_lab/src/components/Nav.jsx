import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <>
     <br />
      <div className="nav">
        <nav>
          <button><Link to="/">Home</Link>&nbsp;</button> 
          <button><Link to="/about">About</Link>&nbsp;</button>
          <button><Link to="/gujarat">Places</Link>&nbsp;</button>
          <button><a href="./gallery.html">Gallery</a>&nbsp;</button>
          <button><a href="./travel.html">Travel Info</a>&nbsp;</button>
          <button><a href="./contactpage.html">Contact</a>&nbsp;</button>
        </nav>
      </div>
     
      <div className="nav2">
         <hr />
        <nav>
          <a href="./rajsthan.html">Rajsthan</a>&nbsp;|
          <a href="./gujarat.html">Gujarat</a>&nbsp;|
          <a href="./up.html">Utter Pardesh</a>&nbsp;|
          <a href="./maharastra.html">Maharastra</a>&nbsp;|
          <a href="./delhi.html">Delhi</a>&nbsp;|
        </nav>
         <hr />
      </div>
    </>
  )
}

export default Nav