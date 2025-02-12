import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex flex-row gap-4 border rounded-3xl border-black m-4 p-4'>
     <Link to={'/post'}>go to post page </Link>
     <Link to={'/products'}>go to product page </Link>
     <Link to={'/profile'}>go to profile page </Link>
    </div>
  )
}

export default HomePage