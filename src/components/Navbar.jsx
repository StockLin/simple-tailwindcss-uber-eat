import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery, } from 'react-icons/tb';
import { FaUserFriends, FaWallet } from 'react-icons/fa';
import { MdFavorite, MdHelp } from 'react-icons/md';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className=' relative flex p-4 justify-around items-center bg-gray-50'>
      {/* left side */}
      <div className='flex items-center gap-4'>
        <div className=' cursor-pointer'><AiOutlineMenu size={30} onClick={() => setNavbarOpen(true)} /></div>
        <h1 className='text-xl md:text-2xl lg:text-2xl'>Best <span className='font-bold'>Eats</span></h1>
        <div className='hidden md:flex md:items-center gap-4 bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black rounded-full text-white p-2 cursor-pointer'>Delivery</p>
          <p className='p-2 cursor-pointers'>Pickup</p>
        </div>
      </div>

      {/* right side */}
      <div className='flex justify-start items-center bg-gray-200 rounded-full px-2 w-sm md:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} />
        <input className='p-2 bg-transparent w-full focus:outline-none' type="text" placeholder='search' />
      </div>


      <button className='flex justify-center items-center bg-black text-white py-2 rounded-full'>
        <BsFillCartFill className='mr-2' size={20} /> Cart
      </button>

      {/* menu */}
      {
        navbarOpen && (
          <div className=' fixed w-full h-screen bg-black/50 z-10 top-0 left-0' onClick={() => setNavbarOpen(!navbarOpen)}></div>
        )
      }

      <div className={`fixed w-[300px] h-screen bg-white z-20 ${navbarOpen ? 'left-0' : 'left-[-100%]'} top-0 duration-300`}>
        <AiOutlineClose className=' absolute top-4 right-4 cursor-pointer hover:bg-gray-50' size={30} onClick={() => setNavbarOpen(false)} />
        <h2 className='text-3xl p-4'>Best <span className='font-bold'>Eats</span></h2>
        <nav>
          <ul className='mt-8'>
            <li className=' flex items-center gap-4 text-xl p-4 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100 duration-300'><TbTruckDelivery size={20} /> Orders</li>
            <li className=' flex items-center gap-4 text-xl p-4 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100 duration-300'><MdFavorite size={20} /> Favorites</li>
            <li className=' flex items-center gap-4 text-xl p-4 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100 duration-300'><FaWallet size={20} /> Wallet</li>
            <li className=' flex items-center gap-4 text-xl p-4 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100 duration-300'><MdHelp size={20} /> Help</li>
            <li className=' flex items-center gap-4 text-xl p-4 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100 duration-300'><AiFillTag size={20} /> Promotions</li>
            <li className=' flex items-center gap-4 text-xl p-4 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100 duration-300'><BsFillSaveFill size={20} /> Best Ones</li>
            <li className=' flex items-center gap-4 text-xl p-4 border-b-[1px] border-gray-300 cursor-pointer hover:bg-gray-100 duration-300'><FaUserFriends size={20} /> Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar