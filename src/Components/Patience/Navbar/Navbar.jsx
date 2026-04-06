import './Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../../../assets/Doctors/ArjunReddy.jpg';

export default function Navbar() {
  const [profileClicked, setProfileClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleprofile() {
    setProfileClicked(!profileClicked);
  }

  function handleMenuClose() {
    setMenuOpen(false);
    setProfileClicked(false);
  }

  function handleLogout() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/" onClick={handleMenuClose}>
          🏥 Medico
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`navbar-collapse ${menuOpen ? 'show-mobile' : 'hide-mobile'}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Mobile profile options */}
            <li className="nav-item mobile-only">
              <NavLink className="nav-link" to="/patient/profile" onClick={handleMenuClose}>
                View Profile
              </NavLink>
            </li>
            <li className="nav-item mobile-only">
              <NavLink className="nav-link" to="/patient/settings" onClick={handleMenuClose}>
                Settings
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="patient/dashboard" onClick={handleMenuClose}>
                Book Appointment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="patient/medication-tests" onClick={handleMenuClose}>
                Medication & Tests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/patient/appointments" onClick={handleMenuClose}>
                Appointments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/patient/contact" onClick={handleMenuClose}>
                Contact
              </NavLink>
            </li>

            {/* Logout at bottom for mobile */}
            <li className="nav-item mobile-only logout-bottom">
              <a className="nav-link" onClick={handleLogout}>
                Logout
              </a>
            </li>

            {/* Desktop profile button */}
            <li className="nav-item desktop-profile">
              <a className="nav-link btn btn-primary text-white ms-2" onClick={handleprofile}>
                <img className="pProfile" src={Image} alt="Profile" />
              </a>
            </li>
          </ul>
          {profileClicked && (
            <div className="pprofileDropdown">
              <NavLink className="dropdown-item" to="/patient/profile" onClick={handleMenuClose}>
                View Profile
              </NavLink>
              <hr />
              <NavLink className="dropdown-item" to="/patient/settings" onClick={handleMenuClose}>
                Settings
              </NavLink>
              <hr />
              <a className="dropdown-item" onClick={handleLogout}>
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
