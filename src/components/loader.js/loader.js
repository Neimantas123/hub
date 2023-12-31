import React from 'react';
import './loader.css';

const Loader = () => {
  return (
    <div className="loader-block">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
