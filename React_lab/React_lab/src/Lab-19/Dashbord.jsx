import React from 'react'
import Profile from './Profile'

function Dashbord({handlelogout,user}) {
  return (
    <>
    <Profile user={user} handlelogout={handlelogout}/>
    </>
  )
}

export default Dashbord