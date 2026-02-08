import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';

function Home() {
  const players = useSelector((state) => state.players.list);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>Добро пожаловать в FC Barcelona</h2>
          <p>Лучший футбольный клуб мира!</p>
          <button className="hero-btn">Узнать больше</button>
        </div>
      </section>

      <section className="players-section">
        <div className="section-container">
          <h2>Наши игроки</h2>
          <div className="players-grid">
            {players.length > 0 ? (
              players.map((player) => (
                <div key={player.id} className="player-card">
                  <div className="player-number">10</div>
                  <h3>{player.name}</h3>
                  <p className="player-position">{player.position}</p>
                  <p className="player-club">{player.club}</p>
                </div>
              ))
            ) : (
              <p className="no-players">Игроки не загружены</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
