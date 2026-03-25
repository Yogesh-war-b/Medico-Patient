import React, { useState } from 'react';

import Navbar from '../Components/Patience/Navbar';

import Search from '../Components/Patience/Search';

import Profile from '../Components/Patience/Profile';

import ContactPage from './Contact';

export default function Patience() {
  const [selectedSection, setSelectedSection] = useState('');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Profile':
        return <Profile />;
      case 'Contact':
        return <ContactPage />;
      case 'settings':
        return <div className="settings-container"><h2>Settings</h2><p>Settings content here.</p></div>;
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
