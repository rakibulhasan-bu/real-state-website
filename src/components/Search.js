import React, { useContext } from 'react';

// import components
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';
import CountryDropdown from './CountryDropdown';

// import icons
import { RiSearch2Line } from 'react-icons/ri'
import { HouseContext } from './HouseContext';

const Search = () => {
  const { houses, handleClick } = useContext(HouseContext)
  return <div className='px-7 py-6 max-w-6xl mx-auto flex flex-col lg:flex-row justify-between lg:shadow-1 relative bg-white lg:bg-transparent gap-4 lg:gap-x-3 lg:backdrop-blur rounded-lg lg:-top-4'>
    <CountryDropdown />
    <PropertyDropdown />
    <PriceRangeDropdown />
    <button onClick={() => handleClick()} className='bg-violet-700 hover:bg-violet-800 h-16 flex  lg:max-w-[182px] justify-center items-center text-xl text-white transition rounded-lg w-full'>
      <RiSearch2Line />
    </button>
  </div>;
};

export default Search;
