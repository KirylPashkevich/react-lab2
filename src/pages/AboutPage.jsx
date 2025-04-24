import React from 'react';
import {
  AboutContainer,
  Section,
  Title,
  Paragraph,
  TeamGrid,
  TeamMember,
  MemberImage
} from '../styles/pages/AboutPageStyles';

const AboutPage = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>О нашей компании</Title>
        <Paragraph>
          Мы - команда профессионалов, которая занимается разработкой и продажей качественных товаров
          уже более 10 лет. Наша миссия - предоставлять клиентам лучшие продукты по доступным ценам.
        </Paragraph>
        <Paragraph>
          Мы постоянно работаем над улучшением качества наших товаров и сервиса, чтобы обеспечить
          максимальное удовлетворение потребностей наших клиентов.
        </Paragraph>
      </Section>

      <Section>
        <Title>Наша команда</Title>
        <TeamGrid>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Член команды 1" />
            <h3>Иван Иванов</h3>
            <p>Генеральный директор</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Член команды 2" />
            <h3>Петр Петров</h3>
            <p>Технический директор</p>
          </TeamMember>
          <TeamMember>
            <MemberImage src="https://via.placeholder.com/150" alt="Член команды 3" />
            <h3>Анна Сидорова</h3>
            <p>Менеджер по продажам</p>
          </TeamMember>
        </TeamGrid>
      </Section>

      <Section>
        <Title>Наши достижения</Title>
        <Paragraph>
          За годы работы мы достигли значительных успехов:
        </Paragraph>
        <ul>
          <li>Более 1000 довольных клиентов</li>
          <li>Сотрудничество с ведущими производителями</li>
          <li>Собственный склад и логистический центр</li>
          <li>Профессиональная команда специалистов</li>
        </ul>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage; 