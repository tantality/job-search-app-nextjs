import { FC } from 'react';
import { StyledDropdown } from './styled';

interface DropdownProps {
  placeholder?: string;
  data: string[];
}

export const Dropdown: FC<DropdownProps> = ({ placeholder, data }) => {
  return <StyledDropdown data={data} placeholder={placeholder ? placeholder : ''} />;
};
