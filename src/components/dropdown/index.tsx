import { FC } from 'react';
import DropdownDownArrowIcon from '../../../public/assets/icons/dropdown-down-arrow.svg';
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
      rightSection={<StyledDownArrowIcon src={DropdownDownArrowIcon} alt="arrow-icon" />}
      rightSectionWidth={48}
    />
  );
};
