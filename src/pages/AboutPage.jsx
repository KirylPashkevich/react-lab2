import React from 'react';
import '../styles/pages/AboutPageStyles.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="about-title">О нашей компании</h2>
        <p className="about-paragraph">
          Мы - команда профессионалов, которая занимается разработкой и продажей качественных товаров
          уже более 10 лет. Наша миссия - предоставлять клиентам лучшие продукты по доступным ценам.
        </p>
        <p className="about-paragraph">
          Мы постоянно работаем над улучшением качества наших товаров и сервиса, чтобы обеспечить
          максимальное удовлетворение потребностей наших клиентов.
        </p>
      </section>

      <section className="about-section">
        <h2 className="about-title">Наша команда</h2>
        <div className="team-grid">
          <div className="team-member">
            <img className="member-image" src="https://via.placeholder.com/150" alt="Член команды 1" />
            <h3>Иван Иванов</h3>
            <p>Генеральный директор</p>
          </div>
          <div className="team-member">
            <img className="member-image" src="https://via.placeholder.com/150" alt="Член команды 2" />
            <h3>Петр Петров</h3>
            <p>Технический директор</p>
          </div>
          <div className="team-member">
            <img className="member-image" src="https://via.placeholder.com/150" alt="Член команды 3" />
            <h3>Анна Сидорова</h3>
            <p>Менеджер по продажам</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-title">Наши достижения</h2>
        <p className="about-paragraph">
          За годы работы мы достигли значительных успехов:
        </p>
        <ul>
          <li>Более 1000 довольных клиентов</li>
          <li>Сотрудничество с ведущими производителями</li>
          <li>Собственный склад и логистический центр</li>
          <li>Профессиональная команда специалистов</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage; 