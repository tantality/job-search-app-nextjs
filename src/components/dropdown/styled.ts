import styled from '@emotion/styled';
import { Select } from '@mantine/core';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const StyledDropdown = styled(Select)`
  .mantine-Select-wrapper {
    &:hover {
      .mantine-Select-input {
        border-color: #5e96fc;
      }
    }
  }

  [aria-expanded='true'] {
    svg {
      color: #5e96fc !important;
    }
  }

  .mantine-Select-dropdown,
  .mantine-Select-input,
  .mantine-Select-item {
    border-radius: 8px;
  }

  .mantine-Select-input,
  .mantine-Select-item {
    font-family: ${inter.style.fontFamily};
    font-style: ${inter.style.fontStyle};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  .mantine-Select-input {
    padding: 11px 42px 11px 12px;
  }

  .mantine-Select-item {
    padding: 12px 8px;
  }

  [data-hovered] {
    background-color: #deecff;
  }

  [data-selected] {
    background-color: #5e96fc;
    color: white;
    font-weight: 500;
    padding: 12px;

    &:hover {
      background-color: #5e96fc;
    }
  }
`;
