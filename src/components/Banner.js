import React from 'react';
import { banner } from '../assets/img/index'
import Search from './Search';

const Banner = () => {
  return <section className='h-full mb-8 xl:mb-24'>
    <div className='flex flex-col gap-8 lg:flex-row '>
      {/* text  */}
      <div className='lg:ml-8 flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4xl font-semibold lg:text-5xl leading-none mb-6'><span className='text-violet-700'>Rent</span> your dream house with us!</h1>
        <p className='max-w-md mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam minus placeat reiciendis beatae aut, amet eaque facere nemo fugiat tempora?</p>
      </div>
      {/* images  */}
      <div className='hidden lg:flex flex-1 justify-end items-end'>

        <img src={banner} alt="" />
      </div>
    </div>
    {/* search section here  */}
    <Search />
  </section>;
};

export default Banner;
