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
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    event.preventDefault();
    setSelectedValue(event.target.value);
    // const filterGenres = data.filter((genres) => genres.genres === selectedValue)
    // setData(filterGenres);
};

  return (
    <div className='w-10/12 mx-auto'>
      <h1 className='text-3xl font-bold text-center mt-9'>All Reviews</h1>
      <div className='text-center mt-6 mb-9 flex justify-between items-center'>
      <div >
      <details className="dropdown">
  <summary className="btn m-1">Sort by Rating or Year</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a onClick={sortByRating}>Rating</a></li>
    <li><a onClick={sortByYear}>Year</a></li>
  </ul>
</details>
      </div>
      <div>
      <label className="form-control">
           <select id="dropdown" name='genres' value={selectedValue} onChange={handleChange} className='input input-bordered w-full' >
           <option value="" disabled>Filtered By Genres</option>
           <option value="Action">Action</option>
           <option value="RPG">RPG</option>
           <option value="Adventure">Adventure</option>
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
