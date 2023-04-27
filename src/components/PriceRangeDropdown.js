import React, { useContext, useState } from 'react';

// import headless ui
import { Menu } from '@headlessui/react';

// import house context
import { HouseContext } from './HouseContext';
import { RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from 'react-icons/ri';


const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    { value: 'Price range (any)' },
    { value: '100000 - 130000' },
    { value: '130000 - 160000' },
    { value: '160000 - 190000' },
    { value: '190000 - 220000' },
    { value: '220000 - 250000' },
    { value: '30000 - 40000' },
  ]

  return <Menu as='div' className='dropdown relative'>
    <Menu.Button onClick={() => setIsOpen(prevState => (!prevState))} className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary' />
      <div>
        <div className=' font-medium leading-tight'>
          {price}
        </div>
        <div className='text-sm'>
          Choose price range
        </div>
      </div>
      {
        isOpen ? (<RiArrowUpSLine className='dropdown-icon-secondary' />) : (<RiArrowDownSLine className='dropdown-icon-secondary' />)
      }
    </Menu.Button>


    <Menu.Items className='dropdown-menu'>
      {prices && prices.map((price, index) => {
        return (
          <Menu.Item
            onClick={() => setPrice(price.value)}
            key={index} as='li' className='cursor-pointer hover:text-violet-700 transition'>
            {price.value}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
