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

  @media (max-width: 700px) {
    grid-template-rows: minmax(600px, 1fr) min-content;
  }

  @media (max-width: 600px) {
    grid-template-rows: minmax(620px, 1fr) min-content;
  }

  @media (max-width: 500px) {
    grid-template-rows: minmax(640px, 1fr) min-content;
  }

  @media (max-width: 450px) {
    grid-template-rows: minmax(720px, 1fr) min-content;
  }

  @media (max-width: 400px) {
    grid-template-rows: minmax(740px, 1fr) min-content;
  }

  @media (max-width: 360px) {
    grid-template-rows: minmax(780px, 1fr) min-content;
  }
`;
