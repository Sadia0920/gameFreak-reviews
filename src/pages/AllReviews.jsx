import React, { useState } from 'react'
import { useLoaderData} from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

export default function AllReviews() {
  const loadedReviews = useLoaderData();
  const [data, setData] = useState(loadedReviews);
  const sortByRating = () => {
    const sortedData = [...data].sort((a, b) => b.rating - a.rating);
    setData(sortedData);
  }
  const sortByYear = () => {
    const sortedData = [...data].sort((a, b) => b.year - a.year);
    setData(sortedData);
  }
 
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    
    fetch('https://game-freak-reviews-server.vercel.app/reviews')
    .then(res => res.json())
    .then(data => {

      const filterGenres = data.filter((genre) => genre.genres === value)
      setData(filterGenres);
    })
};

  return (
    <div className='w-10/12 mx-auto'>
      <h1 className='text-3xl font-bold text-center mt-9'>All Reviews</h1>
      <div className='text-center mt-6 mb-9 flex justify-between items-center'>
      <div >
      <div className="label">
        <span className="label-text font-bold text-black">Sort by Rating or Year</span>
      </div>
      <details className="dropdown">
  <summary className="btn m-1 text-black">Sort</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a className='text-black' onClick={sortByRating}>Rating</a></li>
    <li><a className='text-black' onClick={sortByYear}>Year</a></li>
  </ul>
</details>
      </div>
      <div>
      <label className="form-control">
      <div className="label">
               <span className="label-text font-bold text-black">Filtered By Genres</span>
               </div>
           <select id="dropdown" name='genres' onChange={handleChange} className='input input-bordered w-full text-black' >
           <option value='' disabled>Filtered By Genres</option>
           <option className='text-black' value="Action">Action</option>
           <option className='text-black' value="RPG">RPG</option>
           <option className='text-black' value="Adventure">Adventure</option>
           </select>
           </label>
        </div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        data.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
      }
      </div>
    </div>
  )
}
