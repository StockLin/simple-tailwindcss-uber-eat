import React from 'react'

const Card = () => {
  return (
    <div className=' relative rounded-md overflow-hidden cursor-pointer'>
      <div className=' absolute w-full h-full bg-black/30'></div>
      <div className=' absolute  justify-center w-full h-full bg-black/30 text-white p-2'>
        <h1 className=' font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</h1>
        <p className='px-2'>ooo</p>
        <button className='absolute bottom-8 bg-white border-none rounded-full text-black mx-2 hover:bg-white/80 duration-300'>Order Now</button>
      </div>
      <img className=' object-cover w-full max-h-[360px]' src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    </div>
  )
}

export default Card