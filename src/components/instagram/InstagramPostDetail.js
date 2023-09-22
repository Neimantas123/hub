import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InstagramPostDetails = () => {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPost = localStorage.getItem('currentPost');
    if (storedPost) {
      setPost(JSON.parse(storedPost));
    }
  }, []);

  const handleClose = () => {
    navigate('/');
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="header">
        <img
          className="close-button"
          src={require('../../assets/close.png')}
          alt="close"
          onClick={handleClose}
        />
      </div>
      <div className="single-instragram-post-wrapper">
        <div className="single-instagram-post-block">
          <div className="single-post-top">
            <p className="name">Futugoapp</p>
            <Link to="https://www.instagram.com/futugoapp/">
              <p className="folow" style={{ color: '#000' }}>
                Follow us
              </p>
            </Link>
          </div>
          <img
            src={post.media_url}
            alt={post.caption}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />

          <p className="instagram-post-dec">{post.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default InstagramPostDetails;
