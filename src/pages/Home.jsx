import Hero from '../components/Hero'
import GamingPlatform from '../components/GamingPlatform'
import PremiumAccess from '../components/PremiumAccess'
import ReviewCard from '../components/ReviewCard'
import { useLoaderData} from 'react-router-dom'

export default function Home() {
  const loadedReviews = useLoaderData();
  const limit = 6; 
  const limitedReviews = loadedReviews.slice(0, limit);

  return (
    <div>
      <Hero></Hero>
      <h1 className="text-4xl font-bold text-center mb-9">Highest Rated Game</h1>
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        limitedReviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
      }
      </div>
      <GamingPlatform></GamingPlatform>
      <PremiumAccess></PremiumAccess>
    </div>
  )
}
