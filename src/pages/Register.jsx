import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Register() {

  const {createUser,setUser,updateUserInfo} = useContext(AuthContext);
  const navigate = useNavigate()
  const [showPassword,setShowPassword]=useState(false)
  const [errorMessage,setErrorMessage]=useState('')

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const newUser = {name,photo,email,password}
    console.log(newUser);

    setErrorMessage('')

     const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

     if(!regex.test(password)){
      setErrorMessage('Please give a valid password with at lease one Uppercase, one Lowercase and length must be 6 character or more.')
      return;
    }

    // CreateUser
    createUser(email,password)
    .then(result => {
      setUser(result.user)
      form.reset();
      navigate('/')
    // UpdateUser
    const profile = {
      displayName: name,
      photoURL: photo
    }
    updateUserInfo(profile)
    .then((res)=>{
      console.log(res.user)
    })
    .catch(error => {
      setErrorMessage(error.message)
    })
    })
    .catch(error => {
      console.log(error.message)
      setErrorMessage(error.message)
      setUser(null)
    })

  }
  return (
    <div className='my-7 w-6/12 mx-auto'>
      <div className="hero bg-base-200 rounded-xl py-5">
  <div className="hero-content flex-col w-8/12 mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleCreateUser} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="photo URL" name='photo' className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered " required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword?'text':'password'}  placeholder="password" name='password' className="input input-bordered" required />
          <a onClick={()=>setShowPassword(!showPassword)} className="btn btn-xs text-lg absolute mt-12 ml-[300PX]">{showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>}</a>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0a3d62] text-white">Register</button>
        </div>
      </form>
      {/* Show Error Message */}
      {
        errorMessage && <p className='text-red-600 mb-6 mx-auto px-2'>{errorMessage}</p>
      }
      <p className='font-semibold text-center px-5 mb-6'>Already have an account? please <Link className='border-b-2 border-[#0a3d62] text-[#0a3d62]' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    </div>
  )
}
