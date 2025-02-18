import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';

export default function ReviewDetails() {
    const {user} = useContext(AuthContext)
    const loadedReviewDetails = useLoaderData()
    const {_id,yourName,email,gameName,genres,details,photo,rating,year} = loadedReviewDetails
    const navigate = useNavigate()

    const handleAddToWatchList = () => {
        const email = user.email
        const yourName = user.displayName
        const newWishList = {yourName,email,gameName,genres,details,photo,rating,year}
        // console.log(newWishList)
        // send data to the server
        fetch('https://game-freak-reviews-server.vercel.app/watchList',{
          method : 'POST',
          headers : {
              'content-type' : 'application/json'
          },
          body : JSON.stringify(newWishList)
      })
      .then(res => res.json())
      .then(data => {
          // console.log(data)
          if(data.insertedId){
              Swal.fire({
                  title: 'Success',
                  text: 'WatchList added successfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                })
                navigate('/gameWatchList')
          }
      })
    }
  return (
    <div className='w-11/12 md:w-10/12 lg:w-7/12 mx-auto my-7'>
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5 h-[300PX] w-10/12 mx-auto">
    <img
      src={photo}
      alt="Games"
      className="rounded-xl w-full h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold text-gray-900">{gameName}</h2>
    <p className="text-lg font-semibold text-gray-900">Descriptions :<span className='text-gray-500'>{details}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-900">Rating :<span className='text-gray-500'>{rating} Stars</span></p>
    <p className="text-lg font-semibold text-gray-900">Genres :<span className='text-gray-500'>{genres}</span></p>
    <p className="text-lg font-semibold text-gray-900">Year :<span className='text-gray-500'>{year}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-900">Reviewer's name :<span className='text-gray-500'>{yourName}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-900">Reviewer's email :<span className='text-gray-500'>{email}</span></p>
    
    <div className="card-actions">
      <button onClick={()=>handleAddToWatchList()} className="btn bg-[#0a3d62] text-[#d4af37]">Add to WatchList</button>
    </div>
  </div>
</div>
</div>
  )
}
