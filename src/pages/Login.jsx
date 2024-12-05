import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const {signInUser,signInWithGoogle,setUser} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = {email,password}
    console.log(user);

    // SignInUser
    signInUser(email,password)
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
  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      console.log(result.user)
      setUser(result.user)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
      setUser(null)
    })
  }
  return (
    <div className='my-7 w-6/12 mx-auto'>
      <div className="hero bg-base-200 rounded-xl py-5">
  <div className="hero-content flex-col w-8/12 mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-800">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleSignInUser} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0a3d62] text-white">Login</button>
        </div>
      </form>
      <div className="mx-auto">
          <button onClick={handleGoogleLogin} className="btn px-[105px] mb-4 bg-[#d4af37] text-[#0a3d62]">
            <i className="fa-brands fa-google"></i>
            Login With Google</button>
      </div>
        <p className='font-semibold text-center px-5 mb-6'>Don't have an account? please <Link className='border-b-2 border-[#0a3d62] text-[#0a3d62]' to='/register'>Register</Link></p>
    </div>
  </div>
</div>
    </div>
  )
}
