import { FC, ReactNode } from 'react';
import { StyledContainer } from './styled';

export interface ContainerProps {
  children: ReactNode;
  maxWidth?: number;
}

export const Container: FC<ContainerProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};
