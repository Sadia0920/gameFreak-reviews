import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import ThemeController from './ThemeController'
import { AuthContext } from '../provider/AuthProvider'
import { Tooltip } from 'react-tooltip'

export default function Navbar() {

    const {signOutUser,user,setUser} = useContext(AuthContext)

    const handleSignOut = () => {
      // console.log('logOut')
      signOutUser()
      .then(()=>{
        // console.log('SignOut Successfully')
        setUser(null)
      })
      .catch(error => {
        // console.log(error.message)
      })
    }

    const links = <>
    <NavLink to='/' className='font-semibold text-gray-400'>Home</NavLink>
    <NavLink to='/allReviews' className='lg:ml-3 font-semibold text-gray-400'>All Reviews</NavLink>
    <NavLink to='/aboutUs' className='lg:ml-3 font-semibold text-gray-400'>About Us</NavLink>
  {
    user && 
    <>
    <NavLink to='/addReviews' className='lg:ml-3 font-semibold text-gray-400'>Add Reviews</NavLink>
    <NavLink to='/myReviews' className='lg:ml-3 font-semibold text-gray-400'>My Reviews</NavLink>
    <NavLink to='/gameWatchList' className='lg:ml-3 font-semibold text-gray-400'>Game Watch List</NavLink>
    </>
  }
    
    </>
  return (
    <div className='bg-[#0a3d62] text-[#d4af37] sticky top-0 z-10'>
    <div className="navbar flex-col md:flex-row w-full md:w-10/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn p-0 btn-ghost lg:hidden">
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
    <a className="btn btn-ghost text-lg md:text-xl font-bold"><i className="fa-solid fa-gamepad text-xl md:text-2xl"></i>GameFreak<span className='text-gray-400 '>Reviews</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="md:navbar-end w-7/12 ml-14">
    {
      user?
      <>
      <a data-tooltip-id="my-tooltip"
  data-tooltip-content={user.displayName}
  data-tooltip-place="top">
      <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
      </a>
      <Link onClick={handleSignOut} className="btn text-[#0a3d62] font-bold bg-[#d4af37] ml-4">LogOut</Link>
      </>
      :<>
      <Link to='/login' className="btn text-[#0a3d62] font-bold bg-[#d4af37]">Login</Link>
      <Link to='/register' className="btn text-[#0a3d62] font-bold bg-[#d4af37] ml-4">Register</Link>
      </>
    }
    <ThemeController></ThemeController>
  </div>
</div>
<Tooltip id="my-tooltip"/> 
    </div>
  )
}
