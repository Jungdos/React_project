/* eslint-disable*/
import React, { forwardRef, useEffect, useState } from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import { Home, About, Prop } from './Router';
import Navigation from './components/Navigation';
import Notification from './useEffect/Notification';
import PageLoad from './useEffect/PageLoad.js';
import {  PromotionAppScreenSliderBox, 
  MarginBottomBox, BusinessLinkBox, FaqBox, 
  PromotionAppScreenSliderBox_02, FooterBox, Title } from './components';
  
import { Button } from 'react-bootstrap';
import 'swiper/swiper.css';
import './App.css';

const App = () => {
  const [showNotification, setShowNotification] = useState(false);
  useEffect( () => {
    const timer = setTimeout( ()=> {
      setShowNotification(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLoad url='http://api.example.com/data'>
      <div className="App">
        <h2 className='h2_Title' 
        style={ { 
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'orange',
                    }}>
              Github_Practice
        </h2>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/prop" element={<Prop />}></Route>
        </Routes>
        <PromotionAppScreenSliderBox />
        <MarginBottomBox />
        <BusinessLinkBox />
        <FaqBox />
        <PromotionAppScreenSliderBox_02 />
        <FooterBox />
        
        {showNotification && 
        <Notification 
          message="저를 없애고싶으시다면 클릭하세요!" 
          show={showNotification} 
          onClose={() => setShowNotification(false)}
          />}
      </div>
    </PageLoad>
  );
};

export default App;
