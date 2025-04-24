import React, { useState } from 'react';
import {
  HeaderContainer,
  Nav,
  NavLink,
  ProfileDropdown,
  DropdownButton,
  DropdownContent
} from '../styles/components/HeaderStyles';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <HeaderContainer>
      <Nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/about">О нас</NavLink>
      </Nav>
      <ProfileDropdown>
        <DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          Профиль
        </DropdownButton>
        <DropdownContent isOpen={isDropdownOpen}>
          <NavLink to="/profile">Мой профиль</NavLink>
          <NavLink to="/settings">Настройки</NavLink>
          <NavLink to="/logout">Выйти</NavLink>
        </DropdownContent>
      </ProfileDropdown>
    </HeaderContainer>
  );
};

export default Header; 