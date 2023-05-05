import { FC } from 'react';
import { StyledDropdown, StyledDownArrowIcon } from './styled';

interface DropdownProps {
  placeholder?: string;
  data: string[];
}

export const Dropdown: FC<DropdownProps> = ({ placeholder, data }) => {
  return (
    <StyledDropdown
      data={data}
      placeholder={placeholder ? placeholder : ''}
      size={'md'}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={<StyledDownArrowIcon />}
      rightSectionWidth={48}
    />
  );
};
