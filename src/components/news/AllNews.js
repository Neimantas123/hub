import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllNewsComponent = ({ news }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 36;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = news.slice(indexOfFirstItem, indexOfLastItem);

  const handleClose = () => {
    navigate('/');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#c6c6c7' }}>
      <div className="header">
        <img
          className="close-button"
          src={require('../../assets/close.png')}
          alt="close"
          onClick={handleClose}
        />
      </div>
      <div className="all-news-block">
        {currentNews.map((newsItem, index) => (
          <div className="all-news-card" key={index}>
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="all-news-image"
            />
            <h3 className="all-news-title">{newsItem.title}</h3>
            <p className="all-news-content">
              {newsItem.content[0].substr(0, 120)}....
            </p>
            <a
              href={newsItem.link}
              className="read-more absolute "
              target="blank"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        {news.length > itemsPerPage && (
          <ul className="pagination-list">
            {Array(Math.ceil(news.length / itemsPerPage))
              .fill()
              .map((_, i) => (
                <li
                  key={i}
                  className={`pagination-item ${
                    currentPage === i + 1 ? 'active' : ''
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  <div className="pag-circle"></div>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllNewsComponent;
