import { MantineSize } from '@mantine/core';
import { FC, ReactNode } from 'react';
import { BUTTON_IMPORTANCE } from './constants';
import { StyledButton } from './styled';

export interface ButtonProps {
  children: ReactNode;
  size?: MantineSize;
  importance?: BUTTON_IMPORTANCE;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
