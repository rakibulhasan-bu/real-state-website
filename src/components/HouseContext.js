import React, { createContext, useEffect, useState } from 'react';

// import data
import { housesData } from '../data';

// create context

export const HouseContext = createContext()

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('price range (any)');
  const [Loading, setLoading] = useState(false);


  const handleClick = () => {
    console.log('clicked');
  }

  // import all countries
  useEffect(() => {
    const allCountries = houses.map(house => house.country);
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)]
    setCountries(uniqueCountries);
  }, []);

  // import all Properties
  useEffect(() => {
    const allProperties = houses.map(house => house.type);
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)]
    setProperties(uniqueProperties);
  }, []);

  return (
    <HouseContext.Provider value={{
      handleClick, country, setCountry, countries, property, properties, setProperty, price, setPrice, houses, Loading
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
