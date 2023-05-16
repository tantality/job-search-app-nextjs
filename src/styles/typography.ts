import { TypographyStylesProvider } from '@mantine/core';
import { Inter } from 'next/font/google';
import styled from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export const StyledTypography = styled(TypographyStylesProvider)`
  font-family: ${inter.style.fontFamily};
  font-style: ${inter.style.fontStyle};
  font-weight: 400;

  b {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    margin-bottom: 20px;
  }

  p:has(b) {
    margin-bottom: 16px;
  }

  ul,
  ol {
    padding-left: 25px;
    list-style: disc;

    li {
      margin-top: 0;

      p {
        margin: 0;
      }
    }
  }
`;
