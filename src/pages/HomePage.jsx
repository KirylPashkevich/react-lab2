import React from 'react';
import {
  HomeContainer,
  HeroSection,
  SectionTitle,
  Button,
  FeaturesGrid,
  FeatureCard
} from '../styles/pages/HomePageStyles';

const HomePage = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <SectionTitle>Добро пожаловать в наш магазин</SectionTitle>
        <p>Лучшие товары по лучшим ценам</p>
        <Button to="/catalog">Перейти в каталог</Button>
      </HeroSection>

      <section>
        <SectionTitle>Наши преимущества</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Качество</h3>
            <p>Мы предлагаем только качественные товары от проверенных производителей</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Доставка</h3>
            <p>Быстрая и надежная доставка по всей стране</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Поддержка</h3>
            <p>Квалифицированная поддержка клиентов 24/7</p>
          </FeatureCard>
        </FeaturesGrid>
      </section>
    </HomeContainer>
  );
};

export default HomePage; 