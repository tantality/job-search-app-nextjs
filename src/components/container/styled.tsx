/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';
import { ContainerProps } from '.';

export const StyledContainer = styled.div<Pick<ContainerProps, 'maxWidth'>>`
  max-width: ${({ maxWidth }) => (maxWidth && `${maxWidth}px`) || '1116px'};
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 40px 0 44px;
`;
