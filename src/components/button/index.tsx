import { MantineSize } from '@mantine/core';
import { FC, MouseEvent, ReactNode } from 'react';
import { BUTTON_IMPORTANCE } from './constants';
import { StyledButton } from './styled';

export interface ButtonProps {
  children: ReactNode;
  size?: MantineSize;
  importance?: BUTTON_IMPORTANCE;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
