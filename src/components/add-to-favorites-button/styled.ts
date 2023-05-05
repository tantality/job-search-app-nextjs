import styled from '@emotion/styled';
import { ActionIcon, ActionIconProps, createPolymorphicComponent } from '@mantine/core';

interface StyledAddToFavoritesButtonProps extends ActionIconProps {
  $isActive: boolean;
}

const _StyledAddToFavoritesButton = styled(ActionIcon)<StyledAddToFavoritesButtonProps>`
  background-color: transparent;
  ${({ $isActive }): string => ($isActive ? setSvgStrokeAndFill('#5e96fc', '#5e96fc') : setSvgStrokeAndFill('#ACADB9', 'transparent'))};

  &:hover {
    background-color: transparent;
    ${setSvgStrokeAndFill('#5e96fc')};
  }
`;

function setSvgStrokeAndFill(strokeColor: string, fillColor?: string): string {
  return `
  svg {
    fill: ${fillColor};

      path{
        stroke: ${strokeColor};
      }
  }
  `;
}

export const StyledAddToFavoritesButton = createPolymorphicComponent<'button', StyledAddToFavoritesButtonProps>(
  _StyledAddToFavoritesButton,
);
