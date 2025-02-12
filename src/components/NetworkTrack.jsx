import React, { useEffect, useState } from 'react'

const NetworkTrack = () => {

const[isOnline,setIsOnline]=useState(true)

   useEffect(()=>{
    window.addEventListener("online",()=>{
        setIsOnline(true)
    })
    window.addEventListener("offline",()=>{
        setIsOnline(false)
    })
   },[navigator.onLine])

  return (
    <div>
        {isOnline ? "online" : "offline"}
    </div>
  )
}

export default NetworkTrack