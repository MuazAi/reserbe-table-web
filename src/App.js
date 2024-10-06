import './App.css';
import {
  BrowserRouter,
  Routes,
  Route 
}from 'react-router-dom'
import Home from './Pages/Home';
import Reservation from './Pages/Reservation';
import { useReducer, useState } from 'react';
import ConfirmationBooking from './Pages/ConfirmationBooking';

// let availableTimes = [
//   '17:00',
//   '18:00',
//   '19:00',
//   '20:00',
//   '21:00',
//   '22:00',]

  
function App() {
  // const [availableTimes,dispatchDateChange] = useReducer(updateTimes,intializeTimes)
  return (
    
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservations" element={<Reservation />}></Route>
        <Route path="/confirmation" element={<ConfirmationBooking />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes> 
    </BrowserRouter>
    
  );
}

export default App;
