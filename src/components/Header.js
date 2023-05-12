import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/img/index'

const Header = () => {
  return <header className='py-6 mb-12 border-b px-8'>
    <div className='container mx-auto flex justify-between items-center'>
      {/* logo */}
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      {/* buttons  */}
      <div className='flex items-center gap-6'>
        <Link className='hover:text-violet-900 transition' to={''}>Log in</Link>
        <Link className='bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-800 text-white transition' to={''}>Sign Up</Link>
      </div>
    </div>
  </header>;
};

export default Header;
