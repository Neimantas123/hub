import React, { useRef, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Reels.css';
import lozad from 'lozad';

const ReelVideo = ({
  video,
  index,
  handleFullscreen,
  handleSwipeUp,
  fullscreen,
  handleSwipeDown,
  inViewport,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = lozad(videoRef.current, {
      loaded: (el) => {
        el.play();
      },
    });
    observer.observe();

    return () => {
      if (videoRef.current) {
        observer.observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const playPromise =
      inViewport && !fullscreen
        ? videoRef.current.play()
        : videoRef.current.pause();

    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.error('Error in playing video:', error);
      });
    }
  }, [inViewport, fullscreen]);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleSwipeUp(index),
    onSwipedDown: () => handleSwipeDown(index),
  });

  return (
    <div
      id={`reel-video-wrapper-${index}`}
      className={`reels-video-wrapper ${fullscreen ? 'fullscreen' : ''}`}
      onClick={(e) => handleFullscreen(e.target, index)}
      {...swipeHandlers}
    >
      <video
        ref={videoRef}
        src={video}
        loop
        muted
        playsInline
        className="reels-video"
        type="video/mp4"
      ></video>
    </div>
  );
};

export default ReelVideo;
