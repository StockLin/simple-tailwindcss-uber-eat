import React from 'react'

const Hero = () => {
  return (
    <div className=' max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        <div className=' absolute top-0 left-0 w-full h-full text-gray-200 bg-black/75 flex flex-col justify-center '>
          <h1 className='px-8 text-3xl md:text-5xl lg:text-6xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
          <h1 className='px-8 text-3xl md:text-5xl lg:text-6xl font-bold'><span className='text-orange-500'>Food</span> Delivered</h1>
        </div>
        <img className='max-h-[500px] w-full object-cover' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
    </div>
  )
}

export default Hero