import styled from 'styled-components';
import { StyledLogo } from '../logo/styled';

export const StyledHeader = styled.header`
  background-color: white;
`;

export const StyledContainer = styled.div`
  max-width: 1116px;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  position: relative;
  padding: 24px 0;

  ${StyledLogo} {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;
