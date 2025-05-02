import React from 'react';
import '../styles/components/FooterStyles.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-section">
        <h3>Контакты</h3>
        <ul className="contact-list">
          <li className="contact-item">Email: info@example.com</li>
          <li className="contact-item">Телефон: +375 (44) 5569798</li>
          <li className="contact-item">Адрес: г. Минск</li>
        </ul>
      </section>
      <section className="footer-section">
        <h3>О нас</h3>
        <p>Мы - команда профессионалов, создающая качественные веб-приложения с использованием современных технологий.</p>
      </section>
      <section className="footer-section">
        <h3>Социальные сети</h3>
        <div className="social-links">
          <a 
            href="https://vk.com" 
            className="social-link" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="ВКонтакте"
          >
            VK
          </a>
          <a 
            href="https://telegram.org" 
            className="social-link" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            TG
          </a>
          <a 
            href="https://instagram.com" 
            className="social-link" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            IG
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer; 