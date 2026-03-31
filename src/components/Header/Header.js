import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import './Header.css';

function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>FCBarcelona</h1>
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
        <div className="auth-buttons">
          {isAuthenticated ? (
            <div>
              <span>Привет, {user.username}!</span>
              <button onClick={handleLogout}>Выход</button>
            </div>
          ) : (
            <div>
              <Link to="/login">Вход</Link>
              <Link to="/register">Регистрация</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
