import React, { useState } from 'react';
import { data } from '../data/data';

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    if (category === 'all') {
      setFoods(data);
      return;
    }

    setFoods(data.filter(d => d.category === category));
  }

  const filterPrice = (price) => {
    setFoods(data.filter(d => d.price === price));
  }

  return (
    <div className=' mx-auto px-4 py-12'>
      <h1 className=' text-orange-600 font-bold text-4xl'>Top Rate Menu Items</h1>
      {/* filter row */}
      <div className=' flex flex-col md:flex-row md:justify-between'>
        {/* filter type */}
        <div>
          <p className=' text-bold text-gray-600 mt-4'>Types</p>
          <div className=' flex justify-start flex-wrap'>
            <button onClick={() => filterType('all')} className='m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>All</button>
            <button onClick={() => filterType('burger')} className='m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>Burgers</button>
            <button onClick={() => filterType('pizza')} className='m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>Pizzas</button>
            <button onClick={() => filterType('salad')} className='m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>Salads</button>
            <button onClick={() => filterType('chicken')} className='m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>Chicken</button>
          </div>
        </div>

        {/* filter price */}
        <div>
          <p className=' text-bold text-gray-600 mt-4'>Prices</p>
          <div className=' flex justify-start flex-wrap'>
            <button onClick={() => filterPrice('$')} className=' m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>$</button>
            <button onClick={() => filterPrice('$$')} className=' m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>$$</button>
            <button onClick={() => filterPrice('$$$')} className=' m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>$$$</button>
            <button onClick={() => filterPrice('$$$$')} className=' m-1 bg-white border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white duration-300'>$$$$</button>
          </div>
        </div>
      </div>

      {/* food row */}
      <div className=' mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {
          foods?.map((food) => (
            <div key={food.id} className=' border shadow-lg m-h-[300px] rounded-lg overflow-hidden hover:scale-105 duration-300'>
              <img className=' w-full h-[300px] object-cover md:h-[250px]' src={food.image} alt="" />
              <div className=' p-4 py-8 flex justify-between items-center'>
                <h3 className=' text-2xl font-bold'>{food.name}</h3>
                <p><span className=' bg-orange-500 p-1 text-white rounded-full'>{food.price}</span></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Food