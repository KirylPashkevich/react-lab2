import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="h5 mb-3">Контакты</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                Email: info@example.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                Телефон: +375 (44) 5569798
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Адрес: г. Минск
              </li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="h5 mb-3">О нас</h3>
            <p className="text-muted">
              Мы - команда профессионалов, создающая качественные веб-приложения 
              с использованием современных технологий.
            </p>
          </div>
          
          <div className="col-md-4">
            <h3 className="h5 mb-3">Социальные сети</h3>
            <div className="d-flex gap-3">
              <a 
                href="https://vk.com" 
                className="btn btn-outline-light" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="ВКонтакте"
              >
                <i className="bi bi-vk"></i> VK
              </a>
              <a 
                href="https://telegram.org" 
                className="btn btn-outline-light" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <i className="bi bi-telegram"></i> TG
              </a>
              <a 
                href="https://instagram.com" 
                className="btn btn-outline-light" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i> IG
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 