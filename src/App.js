import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return <div className='max-w-[1440px] container mx-auto bg-white px-0'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
    </Routes>
    <Footer />
  </div>;
};

export default App;
