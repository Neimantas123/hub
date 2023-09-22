import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './News.css';

const News = ({ news, news1, id }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  const navigate = useNavigate();

  const handleReadMore = (news) => {
    setSelectedNews(news);
  };

  return (
    <div className="news-block" id={id}>
      {selectedNews && (
        <div>
          <h2>{selectedNews.title}</h2>
          <img src={selectedNews.image} alt={selectedNews.title} />
          {selectedNews.content.map((paragraph, index) => (
            <p key={index}>{selectedNews.description.substr(0, 120)}</p>
          ))}
          <button onClick={() => setSelectedNews(null)}>Back to news</button>
        </div>
      )}

      {!selectedNews && (
        <div>
          <div className="news-container desktop">
            {news.map((newsItem, index) => (
              <div key={index} className="news-item">
                <img
                  style={{ height: '250px' }}
                  className="all-news-image"
                  src={newsItem.image}
                  alt={newsItem.title}
                />

                <h3>{newsItem.title}</h3>

                <p key={index}>{newsItem.content[0].substr(0, 120)}....</p>

                <a
                  href={newsItem.link}
                  className="read-more absolute "
                  target="blank"
                >
                  READ MORE
                </a>
              </div>
            ))}
          </div>
          <div className="news-container mobile">
            {news.slice(0, showAll ? news.length : 5).map((newsItem, index) => (
              <div key={index} className="news-item">
                <img
                  style={{ height: '250px' }}
                  className="all-news-image"
                  src={newsItem.image}
                  alt={newsItem.title}
                />

                <h3>{newsItem.title}</h3>

                <p key={index}>{newsItem.content[0].substr(0, 120)}</p>

                <a
                  href={newsItem.link}
                  className="read-more absolute "
                  target="blank"
                >
                  READ MORE
                </a>
              </div>
            ))}
          </div>

          {!showAll && (
            <>
              <button
                className="prev-post mobile"
                onClick={() => navigate('/all-news')}
              >
                Previous posts
              </button>
              <button
                className="prev-post desktop"
                onClick={() => navigate('/all-news')}
              >
                MORE
              </button>
            </>
          )}

          {showAll && (
            <div>
              <h2>All News</h2>
              <div>
                {news.map((newsItem, index) => (
                  <div key={index}>
                    <h3>{newsItem.title}</h3>
                    <img src={newsItem.image} alt={newsItem.title} />
                    <p>{newsItem.description}</p>
                    <Link to={`/news/${newsItem.id}`}>Read More</Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default News;
