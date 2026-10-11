import React from 'react'
import { useState } from 'react';

function Login({handlelogin}) {
    const [userName,setuserName]=useState("");
     const [password,setpassword]=useState("");
     const handlesubbmit = (e)=>{
        e.preventDefault();
        if(userName=='Harsh' && password=="45936"){
            handlelogin(userName);
            alert("Login Sucessfully");
        }else{
            alert("enter a valid login details");
        }
    }

  return (

    <>
    <form action="" onSubmit={handlesubbmit}>
        <label htmlFor='userName'>userName</label>
        <input type='text' value={userName} onChange={(e)=>setuserName(e.target.value)}/>
         <label htmlFor='password'>password</label>
        <input type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button type='submit'>subbmit</button>
    </form>

    </>
  )
}

export default Login