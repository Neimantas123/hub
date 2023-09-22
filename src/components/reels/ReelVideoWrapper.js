import React from 'react';
import { useInView } from 'react-intersection-observer';
import ReelVideo from './ReelVideo';
import './Reels.css';

const ReelVideoWrapper = ({
  video,
  index,
  handleFullscreen,
  handleSwipeUp,
  handleSwipeDown,
  currentVideoIndex,
  fullscreen,
}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="wrapper-block">
      <ReelVideo
        video={video}
        index={index}
        handleFullscreen={handleFullscreen}
        handleSwipeUp={handleSwipeUp}
        handleSwipeDown={handleSwipeDown}
        inViewport={inView}
        autoplay={index === currentVideoIndex && fullscreen}
      />
    </div>
  );
};

export default ReelVideoWrapper;
