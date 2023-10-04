import React from 'react';
import './index.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Property } from './Components/Property';



function App() {
  
  return (
<>
   <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/property/:id' element={<Property/>}/> 
  </Routes>
   
   </>
  );

  
}

export default App;
