import { FC, ReactNode } from 'react';
import { StyledContainer } from './styled';

export interface ContainerProps {
  children: ReactNode;
  maxWidth?: number;
}

export const Container: FC<ContainerProps> = ({ children, maxWidth }) => {
  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};
