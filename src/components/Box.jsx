 import React from 'react'
 
 const box = ({children}) => {
   return (
     <div className='border border-gray-800 rounded-lg shadow-lg p-5 m-5'>
      <p>this is p</p>
{children}
     </div>
   )
 }
 
 export default box