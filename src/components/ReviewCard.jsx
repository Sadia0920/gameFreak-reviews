import card2 from '../assets/card2.jpg'
import { Link } from 'react-router-dom'

export default function ReviewCard({review}) {
  const {yourName,email,gameName,genres,details,photo,rating,year} =review
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5 h-[200px] w-[350px] mx-auto">
    <img
      src={photo}
      alt="Games"
      className="rounded-xl w-full h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{gameName}</h2>
    <p className="text-lg font-semibold">Genres :<span className='text-gray-500'>{genres}</span></p>
    <p className="text-lg mb-2 font-semibold">Rating :<span className='text-gray-500'>{rating}</span></p>
    
    <div className="card-actions">
      <button className="btn bg-[#0a3d62] text-[#d4af37]">Explore Details</button>
    </div>
  </div>
</div>
</div>
  )
}
