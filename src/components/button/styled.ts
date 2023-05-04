import styled from '@emotion/styled';
import { Button, createPolymorphicComponent, MANTINE_SIZES } from '@mantine/core';
import { Inter } from 'next/font/google';
import { BUTTON_IMPORTANCE } from './constants';
import { ButtonProps } from '.';

const inter = Inter({ subsets: ['latin'] });

const _StyledButton = styled(Button)<Required<Omit<ButtonProps, 'children'>>>`
  border-radius: 8px;
  font-family: ${inter.style.fontFamily};
  font-style: ${inter.style.fontStyle};
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  transition: 0.2s ease;
`;

_StyledButton.defaultProps = {
  importance: BUTTON_IMPORTANCE.SECONDARY,
  size: MANTINE_SIZES[2],
};

export const StyledButton = createPolymorphicComponent<'button', ButtonProps>(_StyledButton);
