import styled from 'styled-components';

export const StyledVacancyList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;
  height: 100%;

  @media (max-width: 550px) {
    row-gap: 12px;
  }
`;
