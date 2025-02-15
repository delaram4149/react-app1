import React from 'react'
import { Link } from 'react-router-dom'

const PostList2 = ({posts}) => {
  return (
    <div className='col-start-1 col-end-4'>
           <ul>
         {posts.map(({title,id})=>{
           return<>
            <li className='bg-gray-200 my-4'>
            <Link to={`/post/${id}`}>{title}</Link>
            </li>
           
           </>
           
         })}
     </ul>
    </div>
  )
}

export default PostList2