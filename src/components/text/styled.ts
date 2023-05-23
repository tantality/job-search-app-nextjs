/* eslint-disable @typescript-eslint/indent */
import styled from '@emotion/styled';
import { Text } from '@mantine/core';
import { SIZE } from '@/constants';
import { TextProps } from '.';

export const StyledText = styled(Text, { shouldForwardProp: (prop) => prop !== 'lineHeight' })<Omit<TextProps, 'children'>>`
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
