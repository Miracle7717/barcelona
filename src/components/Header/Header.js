import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FC Barcelona</h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Главная</Link>
            </li>
            <li className="nav-item">
              <Link to="/players" className="nav-link">Игроки</Link>
            </li>
            <li className="nav-item">
              <Link to="/matches" className="nav-link">Матчи</Link>
            </li>
            <li className="nav-item">
              <Link to="/standings" className="nav-link">Таблица</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">О нас</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
