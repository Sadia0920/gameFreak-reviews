import { Link } from 'react-router-dom'

export default function ReviewCard({review}) {
  const {_id,yourName,email,gameName,genres,details,photo,rating,year} =review
  
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
  <figure className="px-5 pt-5 h-[200PX] w-11/12 mx-auto">
    <img
      src={photo}
      alt="Games"
      className="rounded-xl w-full h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-gray-950">{gameName}</h2>
    <p className="text-lg font-semibold text-gray-800">Genres :<span className='text-gray-500'>{genres}</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Rating :<span className='text-gray-500'>{rating} Stars</span></p>
    <p className="text-lg mb-2 font-semibold text-gray-800">Year :<span className='text-gray-500'>{year}</span></p>
    
    <div className="card-actions">
      <Link to={`/reviewDetails/${_id}`}><button className="btn bg-[#0a3d62] text-[#d4af37]">Explore Details</button></Link>
    </div>
  </div>
</div>
</div>
  )
}
