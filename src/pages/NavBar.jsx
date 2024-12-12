import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [isShow, setIsShow] = useState(false)
  return (
    <>
    <nav className="flex fixed w-full top-0 items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
           
            <span className="font-semibold text-xl tracking-tight">FramWork  Frontend</span>
        </div>
        <div className="block lg:hidden">
            <button onClick={()=>setIsShow(!isShow)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div className={`w-full ${!isShow && 'hidden'} block flex-grow lg:flex lg:items-center lg:w-auto`}>
            <div className="text-sm lg:flex-grow">
            <Link to={'/'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Home
            </Link>
            <Link to={'/getdata'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Get Data
            </Link>
            <Link to={'/hook-form'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Hook Form
            </Link>
            <Link to={'/products'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                products
            </Link>
           
            </div>
           
        </div>
        </nav>
    </>
  )
}
