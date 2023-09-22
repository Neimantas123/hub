import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewsItemComponent = ({ news }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/all-news');
  };

  const { id } = useParams();
  const selectedNews = news.find((newsItem) => newsItem.id === parseInt(id));

  if (!selectedNews) {
    return <div>News item not found</div>;
  }

  const paragraphs = selectedNews.content.map((paragraph, index) => (
    <p key={index} style={{ paddingBottom: '10px' }}>
      {paragraph}
    </p>
  ));

  return (
    <>
      <div className="header">
        <img
          className="close-button"
          src={require('../../assets/close.png')}
          alt="close"
          onClick={handleClose}
        />
      </div>
      <div className="single-news-body">
        <div className="single-news-block">
          <img src={selectedNews.image} alt={selectedNews.title} />

          <div className="date-author-block">
            <span>{selectedNews.date}</span>
            <span className="name">
              <img src={require('../../assets/User.png')} alt="author" />
              {selectedNews.author}
            </span>
          </div>

          <h2>{selectedNews.title}</h2>
          {paragraphs}
        </div>
      </div>
    </>
  );
};

export default NewsItemComponent;
