import React from 'react';
import { categories } from '../data/data';

const Category = () => {
  return (
    <div className=' mx-auto px-4 py-12'>
      <h1 className=' mb-4 text-center text-5xl font-bold text-orange-500'>Category</h1>

      <div className=' grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4'>
        {
          categories.map((category, idx) => (
            <div key={idx} className=' bg-gray-100 rounded-lg p-4 flex justify-center items-center hover:scale-105  duration-300'>
              <h3 className=' font-bold text-xl'>{category.name}</h3>
              <img className=' w-20 ml-4' src={category.image} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category