import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image1 from '../../assets/event1.jpg';
import image2 from '../../assets/event2.jpg';
import image3 from '../../assets/event3.jpg';
import image4 from '../../assets/event4.jpg';
import image5 from '../../assets/event5.jpg';
import image6 from '../../assets/event6.jpg';
import image7 from '../../assets/event7.jpg';
import image8 from '../../assets/event8.jpg';

const AllEvents = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Event 1',
      description: (
        <>
          ✨Futugo #Community Building and #Networking ✨ <br />
          #MegaSpace co-hosted by @s0meone_u_know <br />
          We are coming together to make new friends and reward our communities
          with prizes <br />
          <br />
          Mar 2nd, 12pm EST <br />
          <br />
          #Prizepool: over 1500 <br />
          <br />
          #Prizes #NFTs #crypto
        </>
      ),

      imageUrl: image1,
      date: 'MARCH 2',
    },
    {
      id: 2,
      title: 'Event 2',
      description: (
        <>
          ✨Futugo #Community Building and #Networking
          <br />
          hosted by @s0meone_u_know ✨<br />
          We are coming together to make new friends and reward our communities
          with prizes <br />
          <br />
          Feb 15th, 10am EST <br />
          <br />
          #Prizepool: over 2000 <br />
          <br />
          #Prizes #NFTs #crypto
        </>
      ),

      imageUrl: image2,
      date: 'FEBRUARY 15',
    },
    {
      id: 3,
      title: 'Event 3',
      description: (
        <>
          #Futugo Fashion Space💜 <br />
          #HauteCouture 2023: #trends forecast for physical and #digital
          #fashion✨
          <br />
          @CatharsisNFT @ClubhouseArcNFT @remx_xyz @web3fashion_ @WDSNFT
          @studioamberde @FAKTURY_ @adrianaNFT @honeyloveclub_ @EyesoFashionNFT
          @krwn_studio
          <br />
          Feb 08th, 11am EST <br />
          <br />
        </>
      ),

      imageUrl: image3,
      date: 'FEBRUARY 8',
    },
    {
      id: 4,
      title: 'Event 4',
      description: (
        <>
          ✨Futugo #Community Building and #Networking <br />
          hosted by @s0meone_u_know ✨ <br />
          We are coming together to make new friends and reward our communities
          with prizes <br />
          <br />
          Feb 02th, 10am EST <br />
          <br />
          #Prizepool: over 2000 <br />
          <br />
          #Prizes #NFTs #crypto
        </>
      ),

      imageUrl: image4,
      date: 'FEBRUARY 2',
    },
    {
      id: 5,
      title: 'Event 5',
      description: (
        <>
          #Futugo Fashion Space✨ <br />
          We are back with - 2023: What to expect for in #digital and physical
          #fashion? <br />
          @ClubhouseArcNFT @EyesoFashionNFT @bugattigrp @CatharsisNFT
          @TheModzKids @XXIMIW3L 💜 <br />
          <br />
          Jan 18th, 10am EST <br />
          <br />
        </>
      ),

      imageUrl: image5,
      date: 'JANUARY 8',
    },
    {
      id: 6,
      title: 'Event 5',
      description: (
        <>
          ✨Futugo #Community Building and #Networking #MegaSpace✨ <br />
          ✨Futugo #Community Building and #Networking #MegaSpace✨ <br />
          <br />
          Jan 5th, 10am EST <br />
          <br />
          #Prizepool: over 2000 <br />
          <br />
          #Prizes #NFTs #crypto
        </>
      ),

      imageUrl: image6,
      date: 'JANUARY 5',
    },
    {
      id: 7,
      title: 'Event 5',
      description: (
        <>
          Futugo #FashionSpace✨ <br />
          What the #crypto crash means for fashion’s #Web3 projects? <br />
          With: @FITzOnOfficial @CatharsisNFT @EyesoFashionNFT @TheMetaFactory
          @FAKTURY_ @ClubhouseArcNFT @maxximillian @TheModzKids @WDSNFT
          @Diverge_meta 💜 <br />
          <br />
          Nov 23th, 10am EST <br />
        </>
      ),

      imageUrl: image7,
      date: 'NOVEMBER 16',
    },
    {
      id: 8,
      title: 'Event 5',
      description: (
        <>
          #Futugo Fashion Space💜 <br />
          Trends outside of clothing: #Jewelry✨ <br />
          With @TheModzKids @CatharsisNFT @maxximillian @WDSNFT @thefabricant
          @bugattigrp @chains_nft @EyesoFashionNFT @krwn_studio @honeyloveclub_
          <br />
          <br />
          Nov 9th, 10am EST <br />
        </>
      ),

      imageUrl: image8,
      date: 'NOVEMBER 9',
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleEventClick(event) {
    setSelectedEvent(event);
  }

  function handleBackClick() {
    setSelectedEvent(null);
    navigate('/events');
  }

  function handleShareOnTwitter(event) {
    if (selectedEvent) {
      const tweetUrl = `https://twitter.com/intent/tweet?text=Check out this event: ${selectedEvent.title}!`;

      window.open(tweetUrl, '_blank');
    }
  }

  if (selectedEvent) {
    // display the selected event with details
    return (
      <>
        <div className="header">
          <img
            className="close-button"
            src={require('../../assets/close.png')}
            alt="close"
            onClick={handleBackClick}
          />
        </div>
        <div className="events-content">
          <div className="single-event-content">
            <div className="top">
              <h3 className="twitter-name">futugoapp</h3>
              <Link to="https://twitter.com/Futugoapp" className="follow">
                FOLLOW US
              </Link>
            </div>
            <div className="bottom">
              <div className="date-event">{selectedEvent.date}</div>
            </div>
            <p className="selected-event-desc">{selectedEvent.description}</p>
            <img src={selectedEvent.imageUrl} alt={selectedEvent.title} />

            <div className="bottom">
              <div className="date-event"></div>
              <div className="share-event" onClick={handleShareOnTwitter}>
                <img src={require('../../assets/Share.png')} alt="share" />
                <span>Share</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  // display the list of events
  return (
    <div className="events-container">
      <div className="header">
        <img
          className="close-button"
          src={require('../../assets/close.png')}
          alt="close"
          onClick={handleClose}
        />
      </div>
      <div className="event-single-block">
        {events.map((event) => (
          <div
            className="single-event-card-all"
            key={event.id}
            onClick={() => handleEventClick(event)}
          >
            <div className="top">
              <h3 className="twitter-name">futugoapp</h3>
              <Link to="https://twitter.com/Futugoapp" className="follow">
                FOLLOW US
              </Link>
            </div>
            <img src={event.imageUrl} alt={event.title} />
            <div className="bottom">
              <div className="date-event">{event.date}</div>
              <div className="share-event" onClick={handleShareOnTwitter}>
                <img src={require('../../assets/Share.png')} alt="share" />
                <span>Share</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;
