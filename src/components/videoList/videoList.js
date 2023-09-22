import React, { useState, useRef } from 'react';
import './videoList.css';
import { FiArrowRight } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';

const VideoList = ({ videos }) => {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null);
  const containerRef = useRef(null);

  const resetVideos = () => {
    if (playingVideoIndex !== null) {
      const videoElement = document.getElementById(
        `video-${playingVideoIndex}`
      );
      if (videoElement) {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
      setPlayingVideoIndex(null);
    }
  };

  const handleVideoClick = (index) => {
    resetVideos();
    setPlayingVideoIndex(index);

    const videoElement = document.getElementById(`video-${index}`);
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleMouseOut = () => {
    resetVideos();
  };

  const scrollLeft = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - 250,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + 250,
      behavior: 'smooth',
    });
  };

  return (
    <div className="video-list-wrapper">
      <FiArrowLeft
        onClick={scrollLeft}
        style={{
          fontSize: '45px',
          color: '#b0b1b3',
          position: 'absolute',
          left: '5%',
          cursor: 'pointer',
        }}
      />
      <div ref={containerRef} className="video-list-container">
        {videos.map((video, index) => (
          <div
            key={index}
            className="video-div"
            style={{ marginRight: '10px' }}
          >
            <video
              id={`video-${index}`}
              src={video}
              onMouseOver={() => handleVideoClick(index)}
              onMouseOut={handleMouseOut}
              style={{
                width: 'auto',
                height: '55vh',
                outline: 'none',
              }}
              controls={false}
            />
          </div>
        ))}
      </div>
      <FiArrowRight
        style={{
          fontSize: '45px',
          color: '#b0b1b3',
          position: 'absolute',
          right: '5%',
          cursor: 'pointer',
        }}
        onClick={scrollRight}
      />
    </div>
  );
};

export default VideoList;
