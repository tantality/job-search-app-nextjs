import styled from '@emotion/styled';
import { TextInput } from '@mantine/core';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const StyledSearchInput = styled(TextInput)`
  input::placeholder {
    color: #acadb9;
  }
  .mantine-Input-icon {
    width: max-content;
    padding: 0 12px;
  }

  .mantine-TextInput-rightSection {
    width: 106px;
  }

  .mantine-TextInput-wrapper {
    &:hover {
      .mantine-TextInput-input {
        border-color: #5e96fc;
      }
    }
  }

  .mantine-TextInput-input {
    font-family: ${inter.style.fontFamily};
    font-style: ${inter.style.fontStyle};
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    border-radius: 8px;
    caret-color: #5e96fc;
    color: #232134;
    padding: 13.5px 115px 13.5px 36px;
  }
`;
