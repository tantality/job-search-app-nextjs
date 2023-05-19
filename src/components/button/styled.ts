import styled from '@emotion/styled';
import { Button, createPolymorphicComponent } from '@mantine/core';
import { Inter } from 'next/font/google';
import { SIZE } from '@/constants';
import { BUTTON_IMPORTANCE, BUTTON_PROPERTIES } from './constants';
import { ButtonProps } from '.';

const inter = Inter({ subsets: ['latin'] });

const _StyledButton = styled(Button)<Required<Omit<ButtonProps, 'children'>>>`
  height: auto;
  border: none;
  border-radius: 8px;
  font-family: ${inter.style.fontFamily};
  font-style: ${inter.style.fontStyle};
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  transition: 0.2s ease;
  ${({ importance }): string => stylizeButtonStates(importance)};
  padding: ${({ size }): string => (size === SIZE.SM ? '5.5px 20px' : '10px 20px')};
`;

_StyledButton.defaultProps = {
  importance: BUTTON_IMPORTANCE.PRIMARY,
  size: SIZE.MD,
};

const stylizeButtonStates = (importance: BUTTON_IMPORTANCE): string => {
  const buttonStates = BUTTON_PROPERTIES[importance];
  const activeState = buttonStates.active;
  const hoverState = buttonStates.hover;
  const pressedState = buttonStates.pressed;

  return `
  color: ${activeState.color};
  background-color:${activeState.backgroundColor};

  &:hover{
    color: ${hoverState.color};
    background-color:${hoverState.backgroundColor};
  }
  
  &:active{
    color: ${pressedState.color};
    background-color:${pressedState.backgroundColor};
  }
  `;
};

export const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);
