/* eslint-disable @typescript-eslint/indent */
import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { Inter } from 'next/font/google';
import { SIZE } from '@/constants';
import { TextProps } from '.';

const inter = Inter({ subsets: ['latin'] });

export const StyledText = styled(Text, { shouldForwardProp: (prop) => prop !== 'lineHeight' })<Omit<TextProps, 'children'>>`
  font-family: ${inter.style.fontFamily};
  font-style: ${inter.style.fontStyle};
  line-height: ${({ lineHeight }): string => (lineHeight ? lineHeight : '20px;')};
  color: #232134;

  ${({ size }) => {
    switch (size) {
      case SIZE.XXL:
        return 'font-size: 24px;';
    }
  }}

  @media (max-width: 950px) {
    ${({ size }) => {
      switch (size) {
        case SIZE.XXL:
          return 'font-size: 22px;';
        case SIZE.LG:
          return 'font-size: 16px;';
        case SIZE.MD:
          return 'font-size: 15px;';
      }
    }}
  }

  @media (max-width: 450px) {
    ${({ size }) => {
      switch (size) {
        case SIZE.XXL:
          return 'font-size: 19px;';
        case SIZE.LG:
          return 'font-size: 15px;';
      }
    }}
  }
`;
