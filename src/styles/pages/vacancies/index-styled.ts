import styled from 'styled-components';

export const StyledMainContent = styled.main`
  display: grid;
  margin-top: 16px;
  row-gap: 40px;
  justify-items: center;
  grid-template-rows: minmax(596px, 1fr) min-content;
  align-items: center;

  @media (max-width: 850px) {
    grid-template-rows: minmax(670px, 1fr) min-content;
  }

  @media (max-width: 800px) {
    grid-template-rows: minmax(580px, 1fr) min-content;
  }

  @media (max-width: 768px) {
    grid-template-rows: 1fr min-content;
  }
`;
