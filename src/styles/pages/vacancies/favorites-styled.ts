import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  row-gap: 104px;
  justify-items: center;
  grid-template-rows: minmax(596px, 1fr) min-content;
  align-items: center;

  @media (max-width: 680px) {
    row-gap: 74px;
    grid-template-rows: minmax(650px, 1fr) min-content;
  }

  @media (max-width: 640px) {
    row-gap: 30px;
    grid-template-rows: 1fr;
  }
`;
