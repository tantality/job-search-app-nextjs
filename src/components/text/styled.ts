import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { Inter } from 'next/font/google';
import { TextProps } from '.';

const inter = Inter({ subsets: ['latin'] });

export const StyledText = styled(Text)<Omit<TextProps, 'children'>>`
  font-family: ${inter.style.fontFamily};
  font-style: ${inter.style.fontStyle};
  line-height: ${({ lineHeight }): string => (lineHeight ? lineHeight : '20px')};
  color: #232134;
`;
