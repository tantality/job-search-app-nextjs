import { TypographyStylesProvider } from '@mantine/core';
import styled from 'styled-components';

export const StyledTypography = styled(TypographyStylesProvider)`
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
    margin-bottom: 20px;

    li {
      margin-top: 0;

      p {
        margin: 0;
      }
    }
  }

  @media (max-width: 950px) {
    b {
      font-size: 18px;
    }

    p {
      margin-bottom: 18px;
    }

    p:has(b) {
      margin-bottom: 14px;
    }
  }

  @media (max-width: 770px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    p {
      margin-bottom: 16px;
    }

    p:has(b) {
      margin-bottom: 12px;
    }
  }

  @media (max-width: 600px) {
    font-size: 15px;
  }

  @media (max-width: 500px) {
    ul,
    ol {
      padding-left: 20px;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 12px;
    }
  }
`;
