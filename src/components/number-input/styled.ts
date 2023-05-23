import styled from '@emotion/styled';
import { NumberInput } from '@mantine/core';

export const StyledNumberInput = styled(NumberInput)`
  input::placeholder {
    color: #acadb9;
  }

  .mantine-NumberInput-wrapper {
    &:hover {
      .mantine-NumberInput-input {
        border-color: #5e96fc;
      }
    }
  }

  .mantine-NumberInput-input {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    border-radius: 8px;
    padding: 11px 42px 11px 12px;
    caret-color: #5e96fc;
    color: #232134;
  }

  .mantine-NumberInput-rightSection {
    right: 4px;

    .mantine-NumberInput-control {
      border: none;

      svg {
        width: 12px;
        height: 12px;
        color: #acadb9;
        stroke-width: 0.8px;
        stroke: #acadb9;
        transition: 0.2s ease;
      }

      &:hover {
        background-color: transparent;

        svg {
          color: #92c1ff;
          stroke: #92c1ff;
        }
      }

      &:active {
        background-color: transparent;

        svg {
          color: #5e96fc;
          stroke: #5e96fc;
        }
      }

      &:disabled {
        cursor: auto;
        svg {
          color: #d5d6dc;
          stroke: #d5d6dc;
        }
      }
    }

    .mantine-NumberInput-controlUp {
      align-items: flex-end;
    }

    .mantine-NumberInput-controlDown {
      align-items: flex-start;
    }
  }
`;
