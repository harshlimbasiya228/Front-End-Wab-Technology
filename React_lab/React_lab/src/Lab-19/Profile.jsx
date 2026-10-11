import React from 'react'

function Profile({handlelogout,user}) {
  return (
   <>
   <button onClick={()=>{
    handlelogout();
   }}>Logout</button>
   <h2>{user}</h2>
   </>
  )
}

export default Profile