import React, { useState } from 'react'

export default function AddReviews() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleAddReviews = (event) => {
        event.preventDefault();
        const form = event.target;
        const yourName = form.yourName.value;
        const email = form.email.value;
        const gameName = form.gameName.value;
        const genres = form.genres.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const newReview = {yourName,email,gameName,genres,details,photo,rating,year}
        console.log(newReview)
        }
  return (
    <div className='w-10/12 mx-auto py-7'>
        <div className=' bg-base-200 rounded-xl p-10'>
            <h2 className='text-center text-4xl font-bold text-[#374151]'>Add Game Reviews</h2>
            <p className='text-center text-[#1B1A1AB3] w-9/12 mx-auto mt-8'>It is a dedicated area where you can add detailed reviews of popular games.This page can significantly enhance user engagement and provide valuable content for visitors.</p>
        <form onSubmit={handleAddReviews}>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Your Name</span>
                </div>
                <input type="text" placeholder="Enter Your Name" name='yourName' className="input input-bordered w-full" required/>
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Your Email</span>
                </div>
                <input type="email" placeholder="Enter Your Email" name='email' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Game Name</span>
                </div>
                <input type="text" placeholder="Enter Game Name" name='gameName' className="input input-bordered w-full" required />
                </label>
            </div>
            <div className='md:w-1/2'>
            <label className="form-control">
               <div className="label">
               <span className="label-text font-bold">Genres</span>
               </div>
               <select id="dropdown" name='genres' value={selectedValue} onChange={handleChange} className='input input-bordered w-full' required>
               <option value="" disabled>Select an option</option>
               <option value="option1">Action</option>
               <option value="option2">RPG</option>
               <option value="option3">Adventure</option>
               </select>
            </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Game Cover Image</span>
                </div>
                <input type="text" placeholder="Enter Photo URL" name='photo' className="input input-bordered w-full" required />
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <div className='md:w-full'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Game Details</span>
                </div>
                <textarea type="text" placeholder="Game Details" name='details' className="textarea" required></textarea>
                </label>
            </div>
        </div>
        <div className='md:flex justify-between items-center gap-5 mt-6'>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Rating</span>
                </div>
                <input type="number" placeholder="Enter Your Rating (1-5)" name='rating' className="input input-bordered w-full" required/>
                </label>
            </div>
            <div className='md:w-1/2'>
                <label className="form-control">
                <div className="label">
                <span className="label-text font-bold">Publishing year</span>
                </div>
                <input type="number" placeholder="Enter Publishing year" name='year' className="input input-bordered w-full" required/>
                </label>
            </div>
        </div>
        <div className='mt-6'>
            <input type="submit" value="Add Review" className="btn w-full font-bold border-[#0a3d62] text-[#0a3d62] bg-[#d4af37]" />
        </div>
        </form>
        </div>
    </div>
  )
}
