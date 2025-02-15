import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const ProfilePage = () => {
  return (
    <div className='grid grid-cols-12'>
<div className='col-start-1 col-end-4'>
  <SideBar/>
</div>

<div className='bg-gray-300 col-start-4 col-end-13'>
  <Outlet/>
</div>
    </div>
  )
}

export default ProfilePage