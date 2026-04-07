import React from 'react';
import NewsList from '../../components/NewsList/NewsList';
import './News.css';

function News() {
  return (
    <div className="news-page">
      <NewsList />
    </div>
  );
}

export default News;