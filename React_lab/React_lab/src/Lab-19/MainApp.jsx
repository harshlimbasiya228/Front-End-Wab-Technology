import React, { useState } from 'react'
import Login from './Login';
import Dashbord from './Dashbord';

function MainApp() {
    const [user,setuser]=useState(null);
    const handlelogin=(user)=>{
        setuser(user);
    }
    const handlelogout=()=>{
        setuser(null)
    }
  return (
    <>
    { !user ? (<Login  handlelogin={handlelogin}/>) : (<Dashbord user={user} handlelogout={handlelogout}/>)}
    </>
  )
}

export default MainApp