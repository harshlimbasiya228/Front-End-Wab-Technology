import React, {  useState ,useEffect} from 'react'

function Eventdemo() {
    const [second, setsecond] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
                setsecond(second+1)
        },1000)
    },[second])
    return (
        <>
            <h2 style={{textAlign:'center'}}>sec:{second}</h2>
            <button onClick={()=>{
                setsecond(second+2);
            }}>push....</button>
        </>


    )
}

export default Eventdemo