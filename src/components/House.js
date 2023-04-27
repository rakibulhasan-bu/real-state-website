import React from 'react';
import { BiArea, BiBath, BiBed } from 'react-icons/bi'

const House = ({ house }) => {
  const { address, agent, bathrooms, bedrooms, country, description, image, imageLg, name, price, surface, type, year,
  } = house;
  return <div className='bg-white p-5 rounded-lg shadow-1 rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
    <img className='mb-8' src={image} alt="" />
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full px-3 text-white'>{type}</div>
      <div className='bg-violet-500 rounded-full px-3 text-white'>{country}</div>
    </div>

    <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
    <div className='flex gap-x-4 my-4'>
      <div className='flex items-center gap-1 text-gray-600'>
        <BiBed /> {bedrooms}
      </div>
      <div className='flex items-center gap-1 text-gray-600'>
        <BiBath /> {bathrooms}
      </div>
      <div className='flex items-center gap-1 text-gray-600'>
        <BiArea /> {surface}
      </div>
    </div>
    <div className='text-lg font-semibold text-violet-500 mb-4'>{price}</div>

  </div>;
};

export default House;
