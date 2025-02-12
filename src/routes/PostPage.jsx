import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostPage = () => {
    const [post, setPost]=useState([])
    const [isPending, setIsPendind]=useState(false)

    const fetchPost =()=>{
        setIsPendind(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((result)=>{
            console.log(result.data);
            
setPost(result.data)
  
     })
        .catch((err)=>{
console.log(err);

        })
        .finally(()=>{
            setIsPendind(false) 
        })
    }


    useEffect(()=>{
        fetchPost()
    },[])
  return (
    <div>
        {isPending ? 'loading...' : 
         <ul>
         {post.map(({title,id})=>{
           return  <li id={id}>{title}</li>
         })}
     </ul>
        }

    </div>
  )
}

export default PostPage