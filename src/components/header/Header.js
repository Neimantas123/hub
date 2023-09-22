import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = (targetId) => {
    const targetElement = document.getElementById(targetId);
    console.log('Target element:', targetElement);
    targetElement.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <img
        src={require('../../assets/Menu.png')}
        alt="menu"
        onClick={handleMenuClick}
        className="hamburger"
      />
      <img
        className="logo mobile"
        src={require('../../assets/Logo-hub.png')}
        alt="logo"
      />
      <img
        className="logo desktop1"
        src={require('../../assets/Futugo-logo-desktop.png')}
        alt="logo"
      />
      <div></div>

      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <img
          className="close-button"
          src={require('../../assets/close.png')}
          alt="close"
          onClick={handleCloseMenu}
        />
        <ul>
          <li className="menu-a" onClick={() => handleClose('reels')}>
            <a href="#reels">Reels</a>
          </li>
          <li className="menu-a" onClick={() => handleClose('news')}>
            <a href="#news">News</a>
          </li>
          <li className="menu-a" onClick={() => handleClose('instagram')}>
            <a href="#instagram">Instagram</a>
          </li>
          <li className="menu-a" onClick={() => handleClose('family')}>
            <a href="#family">Our products</a>
          </li>
          <li className="menu-a" onClick={() => handleClose('events')}>
            <a href="#events">Events</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
