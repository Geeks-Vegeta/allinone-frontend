import React from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Navs from './components/Navs';

export default function App() {
  
  return (
    <>
    <BrowserRouter>
    <NavigationBar/>
    <Navs/>
    </BrowserRouter>
   
    </>
  );
}