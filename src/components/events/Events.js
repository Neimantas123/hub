import React from 'react';
import { useNavigate } from 'react-router-dom';
import('./Events.css');
const Events = ({ id }) => {
  const navigate = useNavigate();
  const handelNavigation = (e) => {
    e.preventDefault();
    navigate('/events');
  };
  return (
    <div className="events-block" id={id}>
      <div className="events-title-block">
        <h2>_EVENTS</h2>
        <img src={require('../../assets/Events.png')} alt="eventes" />
      </div>

      <img
        src={require('../../assets/event6.jpg')}
        alt="event-1"
        className="mobile"
      />
      <div className="events-desktop-block">
        <img
          src={require('../../assets/event6.jpg')}
          alt="event-1"
          className="desktop"
        />
        <img
          src={require('../../assets/event8.jpg')}
          alt="event-1"
          className="desktop"
        />
      </div>
      <div className="button-block">
        <button className="events mobile" onClick={handelNavigation}>
          Previous events
        </button>
        <button className="events desktop" onClick={handelNavigation}>
          MORE
        </button>
      </div>
    </div>
  );
};

export default Events;
