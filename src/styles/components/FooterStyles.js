import styled from '@emotion/styled';

export const FooterContainer = styled.footer`
  background-color: #282c34;
  color: white;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: #3b4049;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a4f58;
  }
`; 