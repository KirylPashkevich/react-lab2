import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutPage = () => {
  return (
    <div className="container py-5">
      <section className="mb-5">
        <h2 className="display-4 mb-4">О нашей компании</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="lead mb-4">
              Мы - команда профессионалов, которая занимается разработкой и продажей качественных товаров
              уже более 10 лет. Наша миссия - предоставлять клиентам лучшие продукты по доступным ценам.
            </p>
            <p className="lead">
              Мы постоянно работаем над улучшением качества наших товаров и сервиса, чтобы обеспечить
              максимальное удовлетворение потребностей наших клиентов.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="display-4 mb-4">Наша команда</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src="" className="card-img-top" alt="Член команды 1" />
              <div className="card-body text-center">
                <h3 className="card-title">Иван Иванов</h3>
                <p className="card-text">Генеральный директор</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="" className="card-img-top" alt="Член команды 2" />
              <div className="card-body text-center">
                <h3 className="card-title">Петр Петров</h3>
                <p className="card-text">Технический директор</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="" className="card-img-top" alt="Член команды 3" />
              <div className="card-body text-center">
                <h3 className="card-title">Анна Сидорова</h3>
                <p className="card-text">Менеджер по продажам</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="display-4 mb-4">Наши достижения</h2>
        <div className="row">
          <div className="col-lg-8">
            <p className="lead mb-4">
              За годы работы мы достигли значительных успехов:
            </p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Более 1000 довольных клиентов</li>
              <li className="list-group-item">Сотрудничество с ведущими производителями</li>
              <li className="list-group-item">Собственный склад и логистический центр</li>
              <li className="list-group-item">Профессиональная команда специалистов</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 