import card2 from '../assets/card2.jpg'
import { Link } from 'react-router-dom'

export default function ReviewCard() {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
  <figure className='h-60 w-44 mx-auto'>
    <img
      src={card2}
      alt="Game Review"
      className='w-full'
      />
  </figure>
  <div className=" flex justify-center items-center gap-12 p-5">
   <div>
   <h2 className="text-lg font-semibold">Name: <span className='text-gray-500'>name</span></h2>
    <h2 className="text-lg my-4 font-semibold">Chef Name: <span className='text-gray-500'>chef</span></h2>
    <h2 className="text-lg font-semibold">Category: <span className='text-gray-500'>category</span></h2>
   </div>
    <div className="card-actions flex-col justify-end">
      {/* <Link to={`/details/${_id}`}><button className="btn bg-orange-200"><i className="fa-regular fa-eye"></i></button></Link> */}
      {/* <Link to={`/updateCoffee/${_id}`} ><button className="btn bg-green-200"><i className="fa-regular fa-pen-to-square"></i></button></Link> */}
      {/* <button onClick={()=>handleDelete(_id)} className="btn bg-red-200"><i className="fa-regular fa-trash-can"></i></button> */}
    </div>
  </div>
</div>
    </div>
  )
}
