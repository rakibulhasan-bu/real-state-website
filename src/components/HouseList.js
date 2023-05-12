import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import { Link } from 'react-router-dom';
import House from './House';
import { ImSpinner2 } from 'react-icons/im'


const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  // if loading
  if (loading) {
    return (
      <ImSpinner2 className='text-6xl mt-40 text-violet-700 animate-spin mx-auto' />
    )
  }

  // if nothing data found
  if (houses.length < 1) {
    return (<div className='text-center text-3xl text-gray-400 font-semibold '> Sorry, nothing data found.</div>)
  }

  return (
    <section className='mb-20 px-6'>
      <div className="container mx-auto">
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {
            houses && houses.map(house => {
              return (
                <Link key={house.id} to={`/property/${house.id}`}>
                  <House house={house} />
                </Link>
              )
            })
          }
        </div>
      </div>

    </section>
  );
};

export default HouseList;
