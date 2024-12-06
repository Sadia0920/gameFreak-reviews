import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ReviewDetails() {
    const loadedReviewDetails = useLoaderData()
    const {_id,yourName,email,gameName,genres,details,photo,rating,year} = loadedReviewDetails

    const handleAddToWatchList = () => {
        console.log('Added To WatchList')
    }
  return (
    <div className='w-7/12 mx-auto my-7'>
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5 h-[300PX] w-10/12 mx-auto">
    <img
      src={photo}
      alt="Games"
      className="rounded-xl w-full h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-xl font-bold">{gameName}</h2>
    <p className="text-lg font-semibold">Descriptions :<span className='text-gray-500'>{details}</span></p>
    <p className="text-lg mb-2 font-semibold">Rating :<span className='text-gray-500'>{rating} Stars</span></p>
    <p className="text-lg font-semibold">Genres :<span className='text-gray-500'>{genres}</span></p>
    <p className="text-lg font-semibold">Year :<span className='text-gray-500'>{year}</span></p>
    <p className="text-lg mb-2 font-semibold">Reviewer's name :<span className='text-gray-500'>{yourName}</span></p>
    <p className="text-lg mb-2 font-semibold">Reviewer's email :<span className='text-gray-500'>{email}</span></p>
    
    <div className="card-actions">
      <button onClick={handleAddToWatchList} className="btn bg-[#0a3d62] text-[#d4af37]">Add to WatchList</button>
    </div>
  </div>
</div>
</div>
  )
}
