import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Instagram.css';
import image1 from '../../assets/Post/instagram1.jpg';
import image2 from '../../assets/Post/instagram2.jpg';
import image3 from '../../assets/Post/instagram3.jpg';
import image11 from '../../assets/Post/instagram11.jpg';
import image12 from '../../assets/Post/instagram12.jpg';
import image13 from '../../assets/Post/instagram13.jpg';

const InstagramPosts = ({ id }) => {
  // const [posts, setPosts] = useState([]);

  // Replace with your actual Page Access Token
  const pageAccessToken =
    'IGQVJXQkZAvUHZA6ZA3lWSXZAlZA0NOcDJZATFBZAZA0ZACTUd6VGswajV6RElBajVXUnZAHYVkyY3VxQzB2SUJWUzJHNzI0U3doa3Q2NTgxbXo2ekNOOVNlT0tVWV9mTWZAJOUpxM1A3TzhpM0d6NUw3b1p4bWdGQQZDZD';

  // useEffect(() => {
  //   fetchInstagramPosts();
  // }, []);

  // async function fetchInstagramPosts() {
  //   try {
  //     const response = await axios.get(
  //       `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${pageAccessToken}&limit=40
  //       `
  //     );
  //     const imagePosts = response.data.data.filter((post) => {
  //       return post.media_type === 'IMAGE' && post.hasOwnProperty('like_count');
  //     });
  //     setPosts(imagePosts);
  //   } catch (error) {
  //     console.error('Error:', error);
  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.error('Error data:', error.response.data);
  //       console.error('Error status:', error.response.status);
  //       console.error('Error headers:', error.response.headers);
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //       // http.ClientRequest in Node.js
  //       console.error('No response received:', error.request);
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.error('Error', error.message);
  //     }
  //     console.error('Error config:', error.config);
  //   }
  // }

  const posts = [
    {
      id: '1',
      media_url: image13,
      caption: 'Image 4',
      media_type: 'IMAGE',
    },
    {
      id: '12',
      media_url: image12,
      caption: 'Image 1',
      media_type: 'IMAGE',
    },
    {
      id: '11',
      media_url: image11,
      caption: 'Image 1',
      media_type: 'IMAGE',
    },
    {
      id: '1',
      media_url: image1,
      caption: 'Image 1',
      media_type: 'IMAGE',
    },
    {
      id: '2',
      media_url: image2,
      caption: 'Image 2',
      media_type: 'IMAGE',
    },
    {
      id: '3',
      media_url: image3,
      caption: 'Image 3',
      media_type: 'IMAGE',
    },
  ];

  const splitPosts = (array, n) => {
    const length = Math.ceil(array.length / n);
    const result = Array.from({ length: n }, (_, i) =>
      array.slice(i * length, (i + 1) * length)
    );
    return result;
  };

  const splittedPosts = splitPosts(posts, 2);

  const handleClick = (post) => {
    localStorage.setItem('currentPost', JSON.stringify(post));
  };

  return (
    <div id={id}>
      <h2 className="family instagram">_INSTAGRAM</h2>
      <div className="post-container-wrapper">
        {splittedPosts.map((postArray, index) => (
          <div
            key={index}
            className="instagram-posts-container"
            style={{
              display: 'flex',
              flexDirection: 'row',
              overflowX: 'scroll',
              padding: '10px',
              width: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            {postArray.map((post) => (
              <div key={post.id} className="instagram-post">
                {/* <a
                  key={post.id}
                  href={`/instagram/${post.id}`}
                  onClick={() => handleClick(post)}
                > */}
                <img
                  src={post.media_url}
                  alt={post.caption}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* </a> */}
              </div>
            ))}
          </div>
        ))}
        <div className="link-wrapper">
          <Link
            to="https://www.instagram.com/futugoapp/"
            className="follow-instagram"
          >
            VISIT INSTAGRAM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstagramPosts;
