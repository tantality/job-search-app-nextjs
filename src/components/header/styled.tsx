import styled from 'styled-components';
import { StyledContainer as StyledMainContainer } from '../container/styled';
import { StyledLogo } from '../logo/styled';

export const StyledHeader = styled.header`
  background-color: white;
`;

export const StyledContainer = styled(StyledMainContainer)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const StyledWrapper = styled.div`
  position: relative;
  padding: 24px 0;

  ${StyledLogo} {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  @media (max-width: 700px) {
    padding: 20px 0;
  }

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    position: static;

    ${StyledLogo} {
      position: static;
      top: 0;
      transform: none;
    }
  }
`;
