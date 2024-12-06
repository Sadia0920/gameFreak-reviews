import React, { useState , useEffect} from 'react'
import { useLoaderData} from 'react-router-dom'
import Hero from '../components/Hero'
import GamingPlatform from '../components/GamingPlatform'
import PremiumAccess from '../components/PremiumAccess'
import ReviewCard from '../components/ReviewCard'

export default function Home() {
  // const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [limit]);

  return (
    <div>
      <Hero></Hero>
      <h1 className="text-4xl font-bold text-center mb-9">Highest Rated Game</h1>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
      }
      </div>
      <GamingPlatform></GamingPlatform>
      <PremiumAccess></PremiumAccess>
    </div>
  )
}
