import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/HeaderStyles.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header-container">
      <nav className="nav">
        <Link to="/" className="nav-link">Главная</Link>
        <Link to="/catalog" className="nav-link">Каталог</Link>
        <Link to="/about" className="nav-link">О нас</Link>
      </nav>
      <div className="profile-dropdown">
        <button 
          className="dropdown-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Профиль
        </button>
        <div className={`dropdown-content ${isDropdownOpen ? 'is-open' : ''}`}>
          <Link to="/profile" className="nav-link">Мой профиль</Link>
          <Link to="/settings" className="nav-link">Настройки</Link>
          <Link to="/logout" className="nav-link">Выйти</Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 