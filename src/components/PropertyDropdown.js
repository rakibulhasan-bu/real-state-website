import React, { useContext, useState } from 'react';

// import headless ui
import { Menu } from '@headlessui/react';

// import house context
import { HouseContext } from './HouseContext';
import { RiArrowDownSLine, RiArrowUpSLine, RiHome5Line } from 'react-icons/ri';


const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false)

  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(prevState => (!prevState))} className='dropdown-btn w-full text-left'>
      <RiHome5Line className='dropdown-icon-primary' />
      <div>
        <div className=' font-medium leading-tight'>
          {property}
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
      {properties && properties.map((property, index) => {
        return (
          <Menu.Item
            onClick={() => setProperty(property)}
            key={index} as='li' className='cursor-pointer hover:text-violet-700 transition'>
            {property}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown;
