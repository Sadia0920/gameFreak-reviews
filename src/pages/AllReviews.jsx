import React from 'react'
import { useLoaderData} from 'react-router-dom'
import ReviewCard from '../components/ReviewCard'

export default function AllReviews() {
  const loadedReviews = useLoaderData();
  return (
    <div>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        loadedReviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
      }
      </div>
    </div>
  )
}
