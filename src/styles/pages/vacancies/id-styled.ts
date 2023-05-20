import styled from 'styled-components';

interface StyledContainerProps {
  justifyContent: string;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
`;

export const StyledMainContent = styled.div`
  height: 100%;
`;
