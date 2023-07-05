import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative '>
        {/*Overlay*/}
        <div className='absolute w-full h-full bg-black/60 rounded-xl text-white
        '>
<p className='font-bold text-2xl px-2 pt-4'>Crave. Click. Enjoy!</p>
<p className='px-2'>Through 8/26</p>
<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/8753755/pexels-photo-8753755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>

       {/* Card */}
       <div className='rounded-xl relative '>
        {/*Overlay*/}
        <div className='absolute w-full h-full bg-black/60 rounded-xl text-white
        '>
<p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
<p className='px-2'>Added Daily</p>
<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/5229775/pexels-photo-5229775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>

       {/* Card */}
       <div className='rounded-xl relative '>
        {/*Overlay*/}
        <div className='absolute w-full h-full bg-black/60 rounded-xl text-white
        '>
<p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
<p className='px-2'>Yummy Treats</p>
<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/789327/pexels-photo-789327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}

export default HeadlineCards
