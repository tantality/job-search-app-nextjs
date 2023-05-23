import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

const _StyledResetButton = styled(Button)`
  padding: 0;
  height: auto;
  border: none;
  font-weight: 500;
  font-size: 14px;
  color: #acadb9;
  line-height: 20px;
  transition: 0.2s ease;
  background-color: transparent;

  &:hover {
    background-color: transparent;
    color: #92c1ff;

    .mantine-Button-rightIcon {
      path {
        stroke: #92c1ff;
      }
    }
  }

  &:active {
    background-color: transparent;
    color: #5e96fc;

    .mantine-Button-rightIcon {
      path {
        stroke: #5e96fc;
      }
    }
  }

  .mantine-Button-rightIcon {
    margin-left: 4px;
    path {
      transition: 0.2s ease;
    }
  }
`;

export const StyledResetButton = createPolymorphicComponent<'button', ButtonProps>(_StyledResetButton);
