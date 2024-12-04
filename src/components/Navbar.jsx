import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const links = <>
    <NavLink to='/' className='font-semibold text-gray-400'>Home</NavLink>
    <NavLink to='/allReviews' className='ml-3 font-semibold text-gray-400'>All Reviews</NavLink>
    <NavLink to='/addReviews' className='ml-3 font-semibold text-gray-400'>Add Reviews</NavLink>
    <NavLink to='/myReviews' className='ml-3 font-semibold text-gray-400'>My Reviews</NavLink>
    <NavLink to='/gameWatchList' className='ml-3 font-semibold text-gray-400'>Game Watch List</NavLink>
    </>
  return (
    <div className='bg-[#0a3d62] text-[#d4af37] py-5'>
    <div className="navbar w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold"><i className="fa-solid fa-gamepad text-2xl"></i>GameFreak<span className='text-gray-400'>Reviews</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/login'><a className="btn text-[#0a3d62] font-bold bg-[#d4af37]">Login</a></NavLink>
    <NavLink to='/register'><a className="btn text-[#0a3d62] font-bold bg-[#d4af37] ml-4">Register</a></NavLink>
    
  </div>
</div>
    </div>
  )
}
