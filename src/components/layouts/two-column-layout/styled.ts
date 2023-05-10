import styled from 'styled-components';

export const StyledTwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(200px, 315px) 1fr;
  column-gap: 28px;
  height: 100%;
  align-items: start;
`;
