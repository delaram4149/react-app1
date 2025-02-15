import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <ul>
        <li>
            <Link to={"/profile/order"}>orders</Link>
        </li>
        <li>
            <Link to={"/profile/address"}>address</Link>
        </li>
        <li>
            <Link to={"/profile/info"}>info</Link>
        </li>
        <li>
            <Link to={"/profile/comments"}>comments</Link>
        </li>
    </ul>
  )
}

export default SideBar