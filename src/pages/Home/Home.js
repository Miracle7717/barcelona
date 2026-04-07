import React from 'react';
import './Home.css';

function Home() {
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
    </div>
  );
}

export default Home;
