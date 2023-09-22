import React, { useEffect, useState } from 'react';
import Events from './events/Events.js';
import Family from './family/Family.js';
import Header from './header/Header.js';
import VideoList from './videoList/videoList.js';
import InstagramPosts from './instagram/InstagramPost.js';
import News from './news/New.js';
import Reels from './reels/Reels.js';
import Loader from './loader.js/loader.js';
import { Link } from 'react-router-dom';

import tiktok1 from '../assets/Video/Tiktok/tiktok1.MP4';
import tiktok2 from '../assets/Video/Tiktok/tiktok2.MP4';
import tiktok4 from '../assets/Video/Tiktok/tiktok4.MP4';
import tiktok5 from '../assets/Video/Tiktok/tiktok5.MP4';
import tiktok6 from '../assets/Video/Tiktok/tiktok6.MP4';
import tiktok7 from '../assets/Video/Tiktok/tiktok7.MP4';
import tiktok8 from '../assets/Video/Tiktok/tiktok8.MP4';
import tiktok9 from '../assets/Video/Tiktok/tiktok9.MP4';
import tiktok11 from '../assets/Video/Tiktok/tiktok11.MP4';
import tiktok12 from '../assets/Video/Tiktok/tiktok12.MP4';
import tiktok13 from '../assets/Video/Tiktok/tiktok13.MP4';
import tiktok15 from '../assets/Video/Tiktok/tiktok15.MP4';
import tiktok16 from '../assets/Video/Tiktok/tiktok16.MP4';
// import tiktok17 from '../assets/Video/Tiktok/tiktok17.MP4';
// import tiktok18 from '../assets/Video/Tiktok/tiktok18.MP4';

import instagram1 from '../assets/Video/instagram1.mp4';
import instagram2 from '../assets/Video/instagram2.mp4';
// import instagram3 from '../assets/Video/instagram3.mp4';
// import instagram4 from '../assets/Video/instagram4.mp4';
// import instagram5 from '../assets/Video/instagram5.mp4';
import instagram6 from '../assets/Video/instagram6.mp4';
import instagram7 from '../assets/Video/instagram7.mp4';
import instagram9 from '../assets/Video/instagram9.mp4';
// import instagram10 from '../assets/Video/instagram10.mp4';
// import instagram11 from '../assets/Video/instagram11.mp4';

// import youtube1 from '../assets/Video/Youtube/youtube1.mp4';
// import youtube2 from '../assets/Video/Youtube/youtube2.mp4';
// import youtube3 from '../assets/Video/Youtube/youtube3.mp4';
// import youtube4 from '../assets/Video/Youtube/youtube4.mp4';
// import youtube5 from '../assets/Video/Youtube/youtube5.mp4';
// import youtube6 from '../assets/Video/Youtube/youtube6.mp4';
// import youtube7 from '../assets/Video/Youtube/youtube7.mp4';
// import youtube8 from '../assets/Video/Youtube/youtube8.mp4';
// import youtube9 from '../assets/Video/Youtube/youtube9.mp4';

const videos = [
  tiktok12,
  tiktok1,
  tiktok2,
  tiktok4,
  tiktok5,
  tiktok6,
  tiktok7,
  instagram1,
  instagram2,
  instagram6,
  instagram7,
  tiktok8,
  tiktok9,
  tiktok11,
  tiktok13,
  tiktok15,
  tiktok16,
  // tiktok17,
  // tiktok18,
  instagram9,
  // instagram10,
  // instagram11,
];

const news = [
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'IMG’s New Virtual Client, Vernon Fronts Kenzo, Shu Qi Is the Face of Michael Kors',
    link: 'https://wwd.com/fashion-news/fashion-scoops/imgs-new-virtual-client-vernon-fronts-kenzo-shu-qi-is-the-face-of-michael-kors-ads-1235781992/',
    content: [
      `IMG Models has signed "alien influencer" Zlu, Vernon appears in Kenzo's fall campaign, Shu Qi makes her debut for Michael Kors.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Zlu_metro_photo7-copy.jpg?crop=0px%2C44px%2C3024px%2C1692px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'What to Watch: Gucci’s New Design, Management Course',
    link: 'https://wwd.com/fashion-news/designer-luxury/what-to-watch-gucci-new-design-management-course-1235760487/',
    content: [
      `The first collection by creative director Sabato De Sarno on Sept. 22 will kick off a new phase for the brand, which is being further revamped by the major management reshuffle revealed in July.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/06/BFA_40311_5674097_v1_QC_R150.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title: 'The Best Fall/Winter 2023 Fashion Campaigns',
    link: 'https://www.elle.com/fashion/trend-reports/g44506121/best-fall-winter-campaigns-2023/',
    content: [
      `Fall already? We can hardly believe it either. Even though we’re dripping in sweat simply looking at any coats right now, the campaigns of the season provide a good idea of what to expect in stores come September. We’re starting to
      `,
    ],

    image:
      'https://hips.hearstapps.com/hmg-prod/images/master-file-pr-1080x1350px13-min-64f0c63e883c0.jpg?crop=1.00xw:0.401xh;0,0&resize=1200:*',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Kering issues 3.8 billion euro bond loan to finance Creed acquisition',
    link: 'https://fashionunited.uk/news/business/kering-issues-3-8-billion-euro-bond-loan-to-finance-creed-acquisition/2023083171330',
    content: [
      `Luxury fashion conglomerate Kering has issued a bond loan of 3.8 billion euros, which it said would “notably” finance its acquisition of perfume house Creed.
      `,
    ],

    image:
      'https://fashionunited.com/cdn-cgi/image/fit=cover,format=auto,gravity=center,height=463,quality=70,width=694/https://fashionunited.com/img/upload/2023/06/27/kering-creed-3-4fy0ldje-2023-06-27-03c8ons8-2023-06-27.jpeg',
  },
  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Theory Taps Chloé’s Chief Commercial Officer Marco Gentile as CEO for Europe and U.K.',
    link: 'https://wwd.com/business-news/human-resources/chloe-marco-gentile-joins-theory-ceo-europe-uk-1235782247/',
    content: [
      `At Chloé, he oversaw the brand’s global retail and wholesale operations and strategy.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Marco_11858.jpg?crop=0px%2C90px%2C4353px%2C2440px&resize=1000%2C563',
  },

  {
    author: 'FutugoApp',
    date: 'Oct 03 20',
    title:
      'Anderson’s Art Show, Jimmy Choo’s New Campaign, Calzedonia to Show in Milan',
    link: 'https://wwd.com/fashion-news/fashion-scoops/andersons-art-show-jimmy-choos-new-campaign-calzedonia-show-in-milan-1235783079/',
    content: [
      `Jonathan Anderson is curating an art show in London, Jimmy Choo unveiled its fall ad campaign, Calzedonia will show in Milan on Sept. 19.
      `,
    ],

    image:
      'https://wwd.com/wp-content/uploads/2023/08/Lucian-Freud_Pigeon_1946-copy.jpg?w=1000&h=563&crop=1&resize=1000%2C563',
  },
];

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        <div className="desktop">
          <Link to="https://chat.futugoapp.com/" target="_blank">
            <img
              className="bot-link-desk"
              src={require('../assets/Hub-desktop-chat.png')}
              alt="chat button"
            />
          </Link>
          <Header />
          <News news={news} />
          <VideoList videos={videos} />

          <InstagramPosts />
          <Family />
          <Events />
        </div>

        <div className="mobile">
          <Header />

          <Link to="https://chat.futugoapp.com/" target="_blank">
            <img
              className="chat-bot-logo"
              src={require('../assets/Chatbot.png')}
              alt="chat button"
            />
          </Link>
          <News id="news" news={news} />
          <Reels id="reels" />

          <InstagramPosts id="instagram" />
          <Family id="family" />
          <Events id="events" />
        </div>
      </>
    );
  }
};

export default HomeScreen;
