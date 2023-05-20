import styled from 'styled-components';

export const StyledTwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 315px) minmax(400px, 1fr);
  column-gap: 28px;
  height: 100%;
  align-items: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    row-gap: 16px;
  }
`;
