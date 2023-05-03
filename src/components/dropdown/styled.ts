import styled from '@emotion/styled';
import { Select } from '@mantine/core';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import styledComponents from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export const StyledDownArrowIcon = styledComponents(Image)`
  transition: transform 0.3s ease;
  transform: scaleY(1);
`;

export const StyledDropdown = styled(Select)`
  input::placeholder {
    color: #acadb9;
  }

  .mantine-Select-wrapper {
    &:hover {
      .mantine-Select-input {
        border-color: #5e96fc;
      }
    }
  }

  [aria-expanded='true'] {
    svg,
    img {
      filter: brightness(0) saturate(100%) invert(59%) sepia(47%) saturate(2687%) hue-rotate(195deg) brightness(97%) contrast(104%);
      color: #5e96fc !important;
      transform: scaleY(-1);
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
    color: #232134;
  }

  .mantine-Select-input {
    padding: 11px 48px 11px 12px;
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
