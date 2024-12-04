import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'

export default function PremiumAccess() {
  return (
    <div className="w-10/12 mx-auto my-14">
        <h1 className="text-4xl font-bold text-center mb-9 w-6/12 mx-auto">Unlock Exclusive Content with Premium Access</h1>
        <div
  className="hero h-[550px]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/93JZK48/premium-Access.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Premium Access</h1>
      <p className="mb-6 w-7/12 mx-auto">
      Premium Access is the ultimate upgrade for dedicated gamers and enthusiasts who want to elevate their experience on the website. By subscribing to Premium Access, you can unlock a range of exclusive features and benefits designed to provide deeper insights, enhanced interaction, and a superior browsing experience.
      </p>
      <div className='md:flex justify-between w-9/12 mx-auto gap-5'>
      <div className="card  image-full h-40 shadow-xl">
  <figure className='h-72 w-full'>
    <img
      src={card1}
      alt="Card"
      className='w-full' />
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold">Ad-Free Experience</h2>
    <p className='w-80'>It removes all advertisements from the website, providing users with a clean and uninterrupted browsing experience.</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Buy Now</button> */}
      <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Subscribe Now - $50</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-gray-800">Ad-Free Experience</h3>
    <p className="py-4 text-gray-800">For buy this Premium Access you should pay $50</p>
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">OK</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
<div className="card bg-base-100 image-full shadow-xl">
  <figure className='h-72 w-full'>
    <img
      src={card2}
      alt="Card"
      className='w-full' />
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold">Members-Only Discord Access</h2>
    <p className='w-80'>It provides a space for the gaming community to interact, share insights, and discuss various gaming topics, all within a more intimate and private setting.</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Subscribe Now</button> */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Subscribe Now - $100</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-gray-800">Members-Only Discord Access</h3>
    <p className="py-4 text-gray-800">For buy this Premium Access you should pay $100</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">OK</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
