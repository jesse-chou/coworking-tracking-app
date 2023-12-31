import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../client/components/Header.jsx';
import Body from '../client/components/Body.jsx';
import Footer from './components/Footer.jsx';
import { LocationProvider } from './context/LocationContext.js';

const App = () => {
  return (
    <LocationProvider>
      <div className='main'>
        <Header/>
        <Body/>
      </div>    
      <Footer/>
    </LocationProvider>
  )
};


export default App;