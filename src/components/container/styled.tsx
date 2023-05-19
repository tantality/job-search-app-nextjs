/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { ContainerProps } from '.';

export const StyledContainer = styled.div<Pick<ContainerProps, 'maxWidth'>>`
  max-width: ${({ maxWidth }) => (maxWidth && `${maxWidth}px`) || '1116px'};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 40px 0 44px;

  @media (max-width: 1180px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 950px) {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 550px) {
    padding: 30px 20px 34px;
  }

  @media (max-width: 420px) {
    padding: 30px 12px 34px;
  }
`;
