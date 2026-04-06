import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Added Navigate
import './Patience.css';
import Profile from '../Components/Patience/Profile/Profile';
import ContactPage from '../Pages/Contact';
import AppointmentData from '../Components/Patience/AppointmentData/AppointmentData';
import MedicationTests from '../Components/Patience/TestsAndMedicines/MedicationTests';
import Settings from '../Components/Patience/Profile/Settings';
import Search from '../Components/Patience/AppointmentBooking/AppointmentBooking'; // Check this path
import Navbar from '../Components/Patience/Navbar/Navbar';

export default function Patience() {
  return (
    <>
      <Navbar />
      <div className="patience-content-wrapper"> 
        <Routes>
          
          <Route path="/" element={<Navigate to="/patient/dashboard" replace />} />

          
          <Route path="/patient/dashboard" element={<Search />} />
          <Route path="/patient/profile" element={<Profile userId="PAT000000001" />} />
          <Route path="/patient/appointments" element={<AppointmentData />} />
          <Route path="/patient/contact" element={<ContactPage />} />
          <Route path="/patient/medication-tests" element={<MedicationTests />} />
          <Route path="/patient/settings" element={<Settings />} />
         
          <Route path="*" element={<Navigate to="/patient/dashboard" replace />} />
        </Routes>
      </div>
    </>
  );
}