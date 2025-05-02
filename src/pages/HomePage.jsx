import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/HomePageStyles.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h2 className="section-title">Добро пожаловать в наш магазин</h2>
        <p>Лучшие товары по лучшим ценам</p>
        <Link to="/catalog" className="home-button">Перейти в каталог</Link>
      </section>

      <section>
        <h2 className="section-title">Наши преимущества</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Качество</h3>
            <p>Мы предлагаем только качественные товары от проверенных производителей</p>
          </div>
          <div className="feature-card">
            <h3>Доставка</h3>
            <p>Быстрая и надежная доставка по всей стране</p>
          </div>
          <div className="feature-card">
            <h3>Поддержка</h3>
            <p>Квалифицированная поддержка клиентов 24/7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 