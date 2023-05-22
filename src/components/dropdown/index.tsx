import { FC } from 'react';
import { SIZE } from '@/constants';
import { StyledDropdown, StyledDownArrowIcon } from './styled';

interface DropdownProps {
  placeholder?: string;
  data: DropdownItem[];
  onChange: (value: string) => void;
  value: string;
}

export interface DropdownItem {
  value: string;
  label: string;
}

export const Dropdown: FC<DropdownProps> = ({ placeholder, ...props }) => {
  return (
    <StyledDropdown
      placeholder={placeholder ?? ''}
      size={SIZE.MD}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      rightSection={<StyledDownArrowIcon />}
      rightSectionWidth={48}
      {...props}
    />
  );
};
