import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../pages/NavBar'

export default function Layout() {
  return (
    <div>
        <div className='mb-20'>
            <NavBar/>
        </div>
        <div>
            <Outlet/>
        </div>
        <div>Footer</div>
    </div>
  )
}
