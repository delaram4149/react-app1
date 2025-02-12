import React, { useEffect, useState } from 'react'

const CountDownTimerCopy = () => {

    const [seconds, setSeconds]= useState(10)
    const [isActive,setIsActive]=useState(false)

    useEffect(()=>{
        let timer;
   
   if(isActive && seconds>0){
    timer=setInterval(()=>{
        setSeconds(seconds-1)
    },1000)
   }else if (seconds===0){
    setIsActive(false)
    clearInterval(timer)
   }
   if(!isActive){
    clearInterval(timer)
   }
   return ()=>{
    clearInterval(timer)
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
    <div className='flex border rounded-lg flex-col gap-5 w-60 border-black shadow-lg p-4'>
        <h1 className='text-2xl font-bold'>countdown timer</h1>
        <p className='text-center'>{seconds} seconds</p>
        <div className='flex gap-3 '>
            <button onClick={startTimer} className={`text-white rounded-lg py-2 px-4 ${isActive ? 'bg-gray-400' : 'bg-blue-600'}`}>start</button>
            <button onClick={stopTimer} className={`text-white rounded-lg py-2 px-4 ${isActive ? 'bg-yellow-400' : 'bg-gray-400'}`}>stop</button>
            <button onClick={resetTimer} className='text-white rounded-lg bg-red-500 py-2 px-4'>reset</button>
        </div>
    </div>
  )
}

export default CountDownTimerCopy