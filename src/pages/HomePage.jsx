import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Добро пожаловать в наш магазин</h1>
              <p className="lead mb-4">Лучшие товары по лучшим ценам</p>
              <Link to="/catalog" className="btn btn-light btn-lg">
                Перейти в каталог
              </Link>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Магазин" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="display-5 text-center mb-5">Наши преимущества</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-award display-4 text-primary mb-3"></i>
                  <h3 className="h4 mb-3">Качество</h3>
                  <p className="text-muted mb-0">
                    Мы предлагаем только качественные товары от проверенных производителей
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-truck display-4 text-primary mb-3"></i>
                  <h3 className="h4 mb-3">Доставка</h3>
                  <p className="text-muted mb-0">
                    Быстрая и надежная доставка по всей стране
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className="bi bi-headset display-4 text-primary mb-3"></i>
                  <h3 className="h4 mb-3">Поддержка</h3>
                  <p className="text-muted mb-0">
                    Квалифицированная поддержка клиентов 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="display-5 mb-4">Готовы начать покупки?</h2>
              <p className="lead mb-4">
                Исследуйте наш каталог и найдите идеальные товары для себя
              </p>
              <Link to="/catalog" className="btn btn-primary btn-lg">
                Смотреть каталог
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 