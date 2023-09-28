import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import PayStore from '../Pages/PayStore';
import Navbar from '../Components/navbar';

export default function StoreRouter() {
  return (
    <> 
        <Navbar/>
        
        <Routes>
            <Route path="home" element={<HomePage/>} />
            <Route path="payment" element={<PayStore/>} />
            
            <Route path="/" element={<Navigate to="/home"/>}/>

        </Routes>
    </>
  )
}
