import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNews, setSelectedNews, setLoading, setError } from '../../redux/newsSlice';
import { fetchNews, fetchNewsDetail } from '../../services/dataService';
import './NewsList.css';

function NewsList() {
  const dispatch = useDispatch();
  const { news, selectedNews, loading } = useSelector((state) => state.news);
  const [showDetail, setShowDetail] = useState(false);

  // Fetch news list
  useEffect(() => {
    const loadNews = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchNews();
        dispatch(setNews(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    loadNews();
  }, [dispatch]);

  // Handler for selecting news item
  const handleSelectNews = async (newsId) => {
    try {
      dispatch(setLoading(true));
      const data = await fetchNewsDetail(newsId);
      dispatch(setSelectedNews(data));
      setShowDetail(true);
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  // Handler for going back to list
  const handleBackToList = () => {
    setShowDetail(false);
    dispatch(setSelectedNews(null));
  };

  // Loading state
  if (loading && news.length === 0) {
    return (
      <section className="news-section">
        <div className="section-container">
          <h2>📰 Новости</h2>
          <div className="loading">
            <p>Загрузка новостей...</p>
            <div className="spinner"></div>
          </div>
        </div>
      </section>
    );
  }

  // Detail view
  if (showDetail && selectedNews) {
    return (
      <section className="news-section">
        <div className="section-container">
          <button className="back-btn" onClick={handleBackToList}>
            ← Назад к новостям
          </button>
          <article className="news-detail">
            <img src={selectedNews.image} alt={selectedNews.title} className="detail-image" />
            <h2>{selectedNews.title}</h2>
            <div className="detail-meta">
              <span className="author">✍️ {selectedNews.author}</span>
              <span className="date">📅 {selectedNews.date}</span>
            </div>
            <div className="detail-content">
              <p>{selectedNews.content}</p>
            </div>
          </article>
        </div>
      </section>
    );
  }

  // List view
  return (
    <section className="news-section">
      <div className="section-container">
        <h2>📰 Новости</h2>
        {loading ? (
          <div className="loading">
            <p>Загрузка новостей...</p>
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="news-list">
            {news.map((item) => (
              <div
                key={item.id}
                className="news-card"
                onClick={() => handleSelectNews(item.id)}
              >
                <img src={item.image} alt={item.title} className="news-image" />
                <div className="news-content">
                  <h3>{item.title}</h3>
                  <p className="excerpt">{item.excerpt}</p>
                  <div className="news-meta">
                    <span className="date">{item.date}</span>
                    <span className="read-more">Читать далее →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsList;
