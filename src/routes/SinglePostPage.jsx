import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SinglePostPage = () => {
  //  const param = useParams()
const {id} = useParams()
const navigate = useNavigate()
console.log(navigate);

const [post, setPost]=useState([])
const [isPending, setIsPendind]=useState(false)
const [error,setError] =useState({})

const fetchPost =(param)=>{
    setIsPendind(true)
    //get(`https://jsonplaceholder.typicode.com/posts/${param}`)
    axios.get("https://jsonplaceholder.typicode.com/posts/" + param)
    .then((result)=>{
        console.log(result.data);
        
setPost(result.data)

 })
    .catch((err)=>{
console.log(err);
setError(err)

    })
    .finally(()=>{
        setIsPendind(false) 
    })
}


useEffect(()=>{
    fetchPost(id)
},[id])
    
  return (
  <>
  
  {isPending ? 'loading...' :
  
  <div className='bg-gray-300 col-start-4 col-end-10'>
  <h1  className='text-2xl font-extrabold mb-2'>{post.title}</h1>
  <p>{post.body}</p>
</div>
  }

  {error.message ? <p>{error.message}</p> : ""}
  <br />
  <button className='border border-black rounded-lg p-4 m-5' onClick={()=>navigate("/post")}> back to all posts</button>
  </>
  )
}

export default SinglePostPage