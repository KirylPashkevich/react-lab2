import React from 'react';
import {
  FooterContainer,
  FooterSection,
  ContactList,
  ContactItem,
  SocialLinks,
  SocialLink
} from '../styles/components/FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h3>Контакты</h3>
        <ContactList>
          <ContactItem>Email: info@example.com</ContactItem>
          <ContactItem>Телефон: +375 (29) 123-45-67</ContactItem>
          <ContactItem>Адрес: г. Минск, ул. Примерная, 1</ContactItem>
        </ContactList>
      </FooterSection>
      <FooterSection>
        <h3>О нас</h3>
        <p>Мы - команда профессионалов, создающая качественные веб-приложения с использованием современных технологий.</p>
      </FooterSection>
      <FooterSection>
        <h3>Социальные сети</h3>
        <SocialLinks>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">VK</SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">TG</SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">IG</SocialLink>
        </SocialLinks>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer; 