import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 100%;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: flex-end;
    gap: 40px;
  }

  @media (max-width: 700px) {
    gap: 20px;
  }

  @media (max-width: 450px) {
    justify-content: center;
  }
`;
