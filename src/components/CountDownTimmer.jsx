 import React, { useEffect, useState } from 'react'
 
 const CountDownTimmer = () => {

  const[seconds, setSeconds]=useState(10)
 const [isActive,setIsActive]= useState(false)

  useEffect(()=>{
    let timer;
if(isActive && seconds>0){
  timer =setInterval(()=>{
    setSeconds(seconds-1)
        },1000)
} else if(seconds===0){
setIsActive(false)
}
  },[seconds,isActive])

  const startTimer=()=>{
    setIsActive(true)
  }
  const stopTimer=()=>{
  setIsActive(false)
  }
  const resetTimer=()=>{
  setIsActive(false)
  setSeconds(10)
  }

   return (
     <div className="flex flex-col gap-5 p-4 border rounded-lg border-black w-60 shadow-lg ">
      <h1 className="text-2xl font-semibold">countdown timer</h1>
    <p className="text-center">{seconds} seconds</p>
      <div className="flex gap-3 ">
        <button onClick={startTimer} className={`px-4 py-2 rounded-lg text-white ${isActive ? "bg-gray-400" : "bg-blue-700"}`} disabled={isActive}>start</button>
         <button onClick={stopTimer} className={`px-4 py-2 rounded-lg text-white ${isActive ? "bg-yellow-300" : "bg-gray-400"}`} disabled={!isActive}>stop</button>
        <button onClick={resetTimer} className="px-4 py-2 rounded-lg text-white bg-red-600">reset</button>
      </div>

     </div>
   )
 }
 
 export default CountDownTimmer