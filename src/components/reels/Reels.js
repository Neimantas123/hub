import React, { useRef, useEffect, useState } from 'react';
import ReelVideoWrapper from './ReelVideoWrapper';
import './Reels.css';
//webm
import tiktok1 from '../../assets/Video/Tiktok/tiktok1.MP4';
import tiktok2 from '../../assets/Video/Tiktok/tiktok2.MP4';
import tiktok3 from '../../assets/Video/Tiktok/tiktok3.MP4';
import tiktok4 from '../../assets/Video/Tiktok/tiktok4.MP4';
import tiktok5 from '../../assets/Video/Tiktok/tiktok5.MP4';
import tiktok6 from '../../assets/Video/Tiktok/tiktok6.MP4';
import tiktok7 from '../../assets/Video/Tiktok/tiktok7.MP4';
import tiktok8 from '../../assets/Video/Tiktok/tiktok8.MP4';
import tiktok9 from '../../assets/Video/Tiktok/tiktok9.MP4';
import tiktok10 from '../../assets/Video/Tiktok/tiktok10.MP4';
import tiktok11 from '../../assets/Video/Tiktok/tiktok11.MP4';
import tiktok12 from '../../assets/Video/Tiktok/tiktok12.MP4';
import tiktok13 from '../../assets/Video/Tiktok/tiktok13.MP4';
import tiktok15 from '../../assets/Video/Tiktok/tiktok15.MP4';
import tiktok16 from '../../assets/Video/Tiktok/tiktok16.MP4';

import instagram1 from '../../assets/Video/instagram1.mp4';
import instagram2 from '../../assets/Video/instagram2.mp4';
import instagram3 from '../../assets/Video/instagram3.mp4';
import instagram4 from '../../assets/Video/instagram4.mp4';
import instagram5 from '../../assets/Video/instagram5.mp4';
import instagram6 from '../../assets/Video/instagram6.mp4';
import instagram7 from '../../assets/Video/instagram7.mp4';
import instagram9 from '../../assets/Video/instagram9.mp4';
// import instagram10 from '../../assets/Video/instagram10.mp4';
// import instagram11 from '../../assets/Video/instagram11.mp4';
// import instagram12 from '../../assets/Video/instagram12.mp4';
// import instagram13 from '../../assets/Video/instagram13.mp4';
// import instagram14 from '../../assets/Video/instagram14.mp4';
// import instagram15 from '../../assets/Video/instagram15.mp4';
// import instagram16 from '../../assets/Video/instagram16.mp4';
// import instagram17 from '../../assets/Video/instagram17.mp4';
// import instagram18 from '../../assets/Video/instagram18.mp4';
// import instagram19 from '../../assets/Video/instagram19.mp4';
// import instagram20 from '../../assets/Video/instagram20.mp4';

// import youtube1 from '../../assets/Video/Youtube/youtube1.mp4';
// import youtube2 from '../../assets/Video/Youtube/youtube2.mp4';
// import youtube3 from '../../assets/Video/Youtube/youtube3.mp4';
// import youtube4 from '../../assets/Video/Youtube/youtube4.mp4';
// import youtube5 from '../../assets/Video/Youtube/youtube5.mp4';
// import youtube6 from '../../assets/Video/Youtube/youtube6.mp4';
// import youtube7 from '../../assets/Video/Youtube/youtube7.mp4';
// import youtube8 from '../../assets/Video/Youtube/youtube8.mp4';
// import youtube9 from '../../assets/Video/Youtube/youtube9.mp4';

const Reels = ({ id }) => {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  // const youtubeVideos = [
  //   youtube1,
  //   youtube2,
  //   youtube3,
  //   youtube4,
  //   youtube5,
  //   youtube6,
  //   youtube7,
  //   youtube8,
  //   youtube9,
  // ];

  const tiktokVideos = [
    tiktok1,
    tiktok2,
    tiktok3,
    tiktok4,
    tiktok5,
    tiktok6,
    tiktok7,
    tiktok8,
    tiktok9,
    tiktok10,
    tiktok11,
    tiktok12,
    tiktok13,
    tiktok15,
    tiktok16,
  ];

  const instagramVideos = [
    instagram1,
    instagram2,
    instagram3,
    instagram4,
    instagram5,
    instagram6,
    instagram7,
    instagram9,
    // instagram10,
    // instagram11,
    // instagram12,
    // instagram13,
    // instagram14,
    // instagram15,
    // instagram16,
    // instagram17,
    // instagram18,
    // instagram19,
    // instagram20,
  ];

  const [currentVideos, setCurrentVideos] = useState(tiktokVideos);

  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [fullscreen]);

  const carouselRef = useRef(null);

  // Reels.js
  const handleScroll = () => {
    if (fullscreen) return;

    const videosElements = carouselRef.current.children;
    let activeVideoIndex;

    for (let i = 0; i < videosElements.length; i++) {
      const videoWrapper = videosElements[i];
      const video = videoWrapper.querySelector('video');
      const videoRect = video.getBoundingClientRect();
      const isInViewport =
        videoRect.top >= 0 && videoRect.bottom <= window.innerHeight;

      if (isInViewport) {
        activeVideoIndex = i;
        if (activeVideoIndex === currentVideoIndex && fullscreen) {
          video.play();
        } else {
          video.pause();
        }
      } else {
        video.pause();
      }
    }

    if (activeVideoIndex !== undefined) {
      const targetScrollPosition = Math.round(
        activeVideoIndex * carouselRef.current.clientHeight
      );
      if (
        Math.abs(
          Math.round(carouselRef.current.scrollTop) - targetScrollPosition
        ) > currentVideos.length
      ) {
        carouselRef.current.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleButtonClick = (index) => {
    carouselRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    switch (index) {
      case 0:
        setCurrentVideos(tiktokVideos);
        setActiveButtonIndex(0);
        break;
      // case 1:
      //   setCurrentVideos(youtubeVideos);
      //   setActiveButtonIndex(1);
      //   break;
      case 2:
        setCurrentVideos(instagramVideos);
        setActiveButtonIndex(2);
        break;
      default:
        setCurrentVideos(tiktokVideos);
        setActiveButtonIndex(0);
    }
  };

  const handleFullscreen = (video, index) => {
    setFullscreen(true);
    setCurrentVideoIndex(index);
    video.muted = false;
    video.play();
  };

  const handleCloseFullscreen = () => {
    setFullscreen(false);
    const video =
      carouselRef.current.children[currentVideoIndex].querySelector('video');
    video.pause();
    video.muted = true;
  };

  const handleSwipeUp = (index) => {
    const nextIndex = index + 1 < currentVideos.length ? index + 1 : 0;
    setCurrentVideoIndex(nextIndex);
  };

  const handleSwipeDown = (index) => {
    const prevIndex = index - 1 >= 0 ? index - 1 : currentVideos.length - 1;
    setCurrentVideoIndex(prevIndex);
  };

  useEffect(() => {
    if (!carouselRef.current) return;
    carouselRef.current.addEventListener('scroll', handleScroll);

    if (fullscreen) {
      carouselRef.current.scrollTo({
        top: currentVideoIndex * (window.innerHeight * 1),
        behavior: 'smooth',
      });
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [fullscreen, currentVideoIndex]);

  return (
    <div id={id}>
      {fullscreen && (
        <div className="fullscreen-menu">
          <button onClick={handleCloseFullscreen} className="close-button">
            <img src={require('../../assets/close.png')} alt="close" />
          </button>
          <div className="menu-options">
            <button
              className={activeButtonIndex === 0 ? 'active' : ''}
              onClick={() => handleButtonClick(0)}
            >
              Tik tok
            </button>
            {/* <button
              className={activeButtonIndex === 1 ? 'active' : ''}
              onClick={() => handleButtonClick(1)}
            >
              Youtube
            </button> */}
            <button
              className={activeButtonIndex === 2 ? 'active' : ''}
              onClick={() => handleButtonClick(2)}
            >
              Instagram
            </button>
          </div>
        </div>
      )}
      <div
        ref={carouselRef}
        className={`reels-carousel ${fullscreen ? 'fullscreen' : ''}`}
      >
        {currentVideos.map((video, index) => (
          <ReelVideoWrapper
            key={video}
            video={video}
            index={index}
            handleFullscreen={handleFullscreen}
            handleSwipeUp={handleSwipeUp}
            handleSwipeDown={handleSwipeDown}
            currentVideoIndex={currentVideoIndex}
            fullscreen={fullscreen}
          />
        ))}
      </div>
    </div>
  );
};

export default Reels;
