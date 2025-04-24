import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3b4049;
  }
`;

export const ProfileDropdown = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3b4049;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  right: 0;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  border-radius: 4px;
  padding: 1rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
`; 