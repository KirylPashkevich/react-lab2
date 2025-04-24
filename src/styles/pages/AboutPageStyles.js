import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #282c34;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const TeamMember = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
`; 