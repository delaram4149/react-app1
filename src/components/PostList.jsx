 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 const PostList = () => {


    const [list ,setList] =useState([])
    const [number ,setNumber]= useState(0)
    
    const fetchData =()=>{
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((result)=>{
setList(result.data)

 })
.catch((err)=>{

})
    }

   // fetchData()=> be ezay taqir state ystate ma fuction =>function yek bar invoke mishe
   // darkhast mizanim va set state anjam midim =>set state mojeb re render component mishe
   // use effect zaman mount component va baqie zamani ke item arraye dependency taqir kone ejra mish

useEffect(()=>{
    fetchData()
},[number])

   return (
    <>
    <div>
    <button onClick={()=>setNumber(number+1)}>click me</button>
        {list.map((item)=>{
       return(
        <p key={item.id}>{item.title}</p>
       )
        })}
     </div>
    </>
   )
 }
 
 export default PostList 