import React from 'react';

// import hpuse data
import { housesData } from '../data';

import { Link, useParams } from 'react-router-dom';

import { BiBed, BiBath, BiArea } from 'react-icons/bi'

const PropertyDetails = () => {
  const { id } = useParams();

  // get the house based on id
  const singleHouse = housesData.filter(house => house.id === parseInt(id));
  const { name, address, imageLg, bathrooms, bedrooms, country, description, image, price, surface, type, year, agent } = singleHouse[0];
  console.log(agent);
  return <section>
    <div className="container mx-auto min-h-[800px] mb-14">

      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
        <div>
          <h2 className='text-2xl font-semibold '>{name}</h2>
          <h3 className='text-lg mb-4'>{address}</h3>
        </div>
        <div className='flex mb-4 lg:mb-0 space-x-2 text-sm'>
          <div className='bg-green-500 px-3 rounded-full text-white'>{type}</div>
          <div className='bg-violet-600 px-3 rounded-full text-white'>{country}</div>
        </div>
        <div className='text-2xl text-violet-600 font-bold'>$ {price}</div>
      </div>

      <div className='flex flex-col lg:flex-row items-start gap-8'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={imageLg} alt="" />
          </div>
          <div className='flex gap-x-8 text-violet-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl ' />
              <div>{bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl ' />
              <div>{bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl ' />
              <div>{surface}</div>
            </div>
          </div>
          <div>{description}</div>
        </div>
        <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 border border-gray-300 p-1 rounded-full'>
              <img src={agent.image} alt="" />
            </div>
            <div>
              <div className='font-bold text-lg'>{agent.name}</div>
              <Link to='/' className='text-sm text-violet-500'>View Listings</Link>
            </div>
          </div>
          {/* forrm  */}
          <form className='flex flex-col gap-y-4'>
            <input type="text" className='border border-gray-300 focus:border-violet-700 outline-none w-full rounded px-4 h-12 text-sm' placeholder='Name*' />
            <input type="text" className='border border-gray-300 focus:border-violet-700 outline-none w-full rounded px-4 h-12 text-sm' placeholder='Email*' />
            <input type="text" className='border border-gray-300 focus:border-violet-700 outline-none w-full rounded px-4 h-12 text-sm' placeholder='Phone*' />
            <textarea className='border border-gray-300 focus:border-violet-700 outline-none w-full rounded p-4 h-36 text-gray-400 text-sm resize-none' placeholder='Message*' defaultValue='Hello , i am interested in [Modern Apartment]'></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-violet-700 hover:bg-violet-800 transition rounded w-full p-4 text-white text-sm'>Send button</button>
              <button className='border border-violet-700 text-violet-700 rounded text-sm p-4 w-full hover:border-violet-500 hover:text-violet-500 transition '>Call</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>;
};

export default PropertyDetails;
