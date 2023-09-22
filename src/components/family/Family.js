import React from 'react';
import { Link } from 'react-router-dom';
import('./Family.css');

const Family = ({ id }) => {
  return (
    <div id={id}>
      <h2 className="family">_FUTUGO FAMILY</h2>
      <div clasname="overflow-family" style={{ overflowX: 'scroll' }}>
        <div className="family-block">
          <Link
            to="https://shop.futugoapp.com/"
            target="_blank"
            className="mobile"
          >
            <img
              style={{ marginLeft: '15px' }}
              src={require('../../assets/futugo-shop.png')}
              alt="Futugo shop"
            />
          </Link>
          <Link
            to="https://digital.futugoapp.com/"
            target="_blank"
            className="mobile"
          >
            <img
              style={{ marginLeft: '15px' }}
              src={require('../../assets/Futugo-nft.png')}
              alt="Futugo nft"
            />
          </Link>
          <Link to="https://futugoapp.com/" target="_blank" className="mobile">
            <img
              style={{ marginLeft: '15px', marginRight: '15px' }}
              src={require('../../assets/futugo-app.png')}
              alt="Futugo app"
            />
          </Link>
          <Link
            to="https://shop.futugoapp.com/"
            target="_blank"
            className="desktop"
          >
            <img
              style={{ marginLeft: '15px', marginRight: '15px' }}
              src={require('../../assets/Futugo-shop-desktop.png')}
              alt="Futugo app"
              className="family-desktop-image"
            />
          </Link>
          <Link
            to="https://chat.futugoapp.com/"
            target="_blank"
            className="desktop"
          >
            <img
              style={{ marginLeft: '15px', marginRight: '15px' }}
              src={require('../../assets/futugo-bot.png')}
              alt="Futugo app"
              className="family-desktop-image"
            />
          </Link>
          <Link
            to="https://digital.futugoapp.com/"
            target="_blank"
            className="desktop"
          >
            <img
              style={{ marginLeft: '15px', marginRight: '15px' }}
              src={require('../../assets/Futugo-nft-desktop.png')}
              alt="Futugo app"
              className="family-desktop-image"
            />
          </Link>
          <Link to="https://futugoapp.com/" target="_blank" className="desktop">
            <img
              style={{ marginLeft: '15px', marginRight: '15px' }}
              src={require('../../assets/Futugo-app-dekstop.png')}
              alt="Futugo app"
              className="family-desktop-image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Family;
