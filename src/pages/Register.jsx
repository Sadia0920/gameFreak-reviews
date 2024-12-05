import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {

  const {createUser,setUser} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleCreateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const newUser = {name,photo,email,password}
    console.log(newUser);

    // CreateUser
    createUser(email,password)
    .then(result => {
      console.log(result.user)
      setUser(result.user)
      navigate('/')
    })
    .catch(error => {
      console.log(error.message)
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0a3d62] text-white">Register</button>
        </div>
      </form>
      <p className='font-semibold text-center px-5 mb-6'>Already have an account? please <Link className='border-b-2 border-[#0a3d62] text-[#0a3d62]' to='/login'>Login</Link></p>
    </div>
  </div>
</div>
    </div>
  )
}
