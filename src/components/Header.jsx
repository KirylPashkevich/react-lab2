import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">{t('common.store')}</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">{t('common.home')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">{t('common.catalog')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories">{t('common.categories')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{t('common.about')}</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center me-3">
            <div className="btn-group">
              <button
                className={`btn btn-outline-light ${i18n.language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLanguage('ru')}
              >
                RU
              </button>
              <button
                className={`btn btn-outline-light ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
          <div className="dropdown">
            <button 
              className="btn btn-secondary dropdown-toggle" 
              type="button" 
              id="profileDropdown" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              {t('common.profile')}
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li><Link className="dropdown-item" to="/profile">{t('common.profile')}</Link></li>
              <li><Link className="dropdown-item" to="/settings">{t('common.settings')}</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/logout">{t('common.logout')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header; 