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
  const [loading, setLoading] = useState(false);


  // create a function that checks if the string location any
  const isDefault = str => {
    return str.split(' ').includes('(any)')
  }

  // get first value of price that lowest price and perse to number
  const minPrice = parseInt(price.split(' ')[0]);
  // get second value of price that highest price and perse to number
  const maxPrice = parseInt(price.split(' ')[2]);


  // create handle click functionality for search button
  const handleClick = () => {
    // set loading
    setLoading(true);

    // filter every element and return search result
    const newHouses = housesData.filter(house => {
      const housePrice = parseInt(house.price);

      // if all value are default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house
      }
      // if all value are selected
      else if (house.country === country && house.type === property && house.price >= minPrice && house.price <= maxPrice) {
        return house
      }
      // if country is not default
      else if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      // if property is not default
      else if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
      // if price is not default
      else if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }
      // if country and property is not default
      else if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property
      }
      // if country and price is not default
      else if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      // if property and price is not default
      else if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

    })
    // return newHouses;
    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 500);
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
      handleClick, country, setCountry, countries, property, properties, setProperty, price, setPrice, houses, loading
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
