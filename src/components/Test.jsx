 import React, { useEffect, useState } from 'react'
 
 const Test = () => {
 const [showHeading,setShowHeading] = useState(true)
 const handleMouseEnter=()=>{
  setShowHeading(true)
 }
 const handleMouseLeave=()=>{
  setShowHeading(false)
 }
useEffect(()=>{
  let timer;
  timer= setInterval(()=>{
    console.log("hello");
    
  },1000)
  return()=>{
   clearInterval(timer)
    
  }
  
},[])
  

   return (
     <div className='flex bg-red-700 hover:bg-green-700 w-72 h-72' onMouseLeave={(e)=>handleMouseLeave(e)} onMouseEnter={(e)=>handleMouseEnter(e)}>
{showHeading && <h1>hi</h1>}
     </div>
   )
 }
 
 export default Test