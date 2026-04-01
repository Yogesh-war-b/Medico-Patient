import React, { useState } from 'react';

import Navbar from '../Components/Patience/Navbar';

import Search from '../Components/Patience/Search';

import Profile from '../Components/Patience/Profile';

import ContactPage from './Contact';

import AppointmentData from '../Components/Patience/AppointmentData';

import './Patience.css';

import MedicationTests from '../Components/Patience/MedicationTests';

export default function Patience() {
  const [selectedSection, setSelectedSection] = useState('');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Profile':
        return <Profile userId="PAT000000001" />;
      case 'Contact':
        return <ContactPage />;
      case 'AppointmentData':
        return <AppointmentData />;
      case 'settings':
        return <div className="settings-container"><h2>Settings</h2><p>Settings content here.</p></div>;
      case 'MedicationTests':
        return <MedicationTests />;

      case 'logout':
        // Handle logout
        localStorage.clear();
        window.location.href = '/';
        return null;
      default:
        return <Search />;
    }
  };
    
  return (
    <div>
      <Navbar onSectionChange={setSelectedSection} />
      {renderContent()}
    </div>
  );
}
