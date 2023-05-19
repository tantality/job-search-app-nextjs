import { FC, MouseEvent, ReactNode } from 'react';
import { SIZE } from '@/constants';
import { BUTTON_IMPORTANCE } from './constants';
import { StyledButton } from './styled';

export interface ButtonProps {
  children: ReactNode;
  size?: SIZE;
  importance?: BUTTON_IMPORTANCE;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
