import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Outlet } from 'react-router-dom'
import PostList2 from '../components/PostList2'

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
    <div className='grid grid-cols-9 gap-2'>
        {isPending ? 'loading...' : 
  <PostList2 posts={post}/>
        }
        <Outlet/>

    </div>
  )
}

export default PostPage