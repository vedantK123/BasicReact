import React from 'react'
import Siderbar from './Sidebar/Siderbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
        <Siderbar/>
        <div className='content'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
