import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayers, setLoading } from '../../redux/playersSlice';
import { fetchPlayers } from '../../services/dataService';
import NewsList from '../../components/NewsList/NewsList';
import MatchesList from '../../components/MatchesList/MatchesList';
import StandingsList from '../../components/StandingsList/StandingsList';
import './Home.css';

function Home() {
  const dispatch = useDispatch();
  const { list: players, loading } = useSelector((state) => state.players);

  // Load players data on component mount
  useEffect(() => {
    const loadPlayers = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchPlayers();
        dispatch(setPlayers(data));
      } catch (err) {
        console.error('Error loading players:', err);
      }
    };

    loadPlayers();
  }, [dispatch]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Добро пожаловать в FCBarcelona</h1>
          <p>Лучший футбольный клуб мира!</p>
          <button className="hero-btn">Узнать больше</button>
        </div>
      </section>

      {/* Players Section */}
      <section className="players-section">
        <div className="section-container">
          <h2>👥 Наши игроки</h2>
          {loading && players.length === 0 ? (
            <div className="loading-players">
              <p>Загрузка игроков...</p>
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="players-grid">
              {players.length > 0 ? (
                players.map((player) => (
                  <div key={player.id} className="player-card">
                    <div className="player-number">{player.number}</div>
                    <h3>{player.name}</h3>
                    <p className="player-position">{player.position}</p>
                    <p className="player-club">{player.club}</p>
                  </div>
                ))
              ) : (
                <p className="no-players">Игроки не загружены</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* News Section with LIST/DETAIL */}
      <NewsList />

      {/* Matches Section */}
      <MatchesList />

      {/* Standings Section */}
      <StandingsList />
    </div>
  );
}

export default Home;
