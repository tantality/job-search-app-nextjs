import { FC } from 'react';
import { StyledDropdown, StyledDownArrowIcon } from './styled';

interface DropdownProps {
  placeholder?: string;
  data: DropdownItem[];
  onChange: (value: string) => void;
}

export interface DropdownItem {
  value: string;
  label: string;
}

export const Dropdown: FC<DropdownProps> = ({ placeholder, data, onChange }) => {
  return (
    <StyledDropdown
      data={data}
      placeholder={placeholder ? placeholder : ''}
      size={'md'}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={<StyledDownArrowIcon />}
      rightSectionWidth={48}
      onChange={onChange}
    />
  );
};
