import React, { useContext, useState } from 'react';

// import headless ui
import { Menu } from '@headlessui/react';

// import house context
import { HouseContext } from './HouseContext';
import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from 'react-icons/ri';


const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false)

  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(prevState => (!prevState))} className='dropdown-btn w-full text-left'>
      <RiMapPinLine className='dropdown-icon-primary' />
      <div>
        <div className=' font-medium leading-tight'>
          {country}
        </div>
        <div className='text-sm'>
          Select your place
        </div>
      </div>
      {
        isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary' />) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)
      }
    </Menu.Button>


    <Menu.Items className='dropdown-menu'>
      {countries && countries.map((country, index) => {
        return (
          <Menu.Item
            onClick={() => setCountry(country)}
            key={index} as='li' className='cursor-pointer hover:text-violet-700 transition'>
            {country}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default CountryDropdown;
