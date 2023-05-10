import { ChangeEvent, FC, MouseEvent } from 'react';
import { SIZE } from '@/constants';
import { Button } from '../button';
import SearchIcon from '../../../public/assets/icons/search.svg';
import { StyledSearchInput } from './styled';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onSubmitButtonClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ placeholder, value, onSubmitButtonClick, onChange }) => {
  const searchButton = (
    <Button size={SIZE.SM} onClick={onSubmitButtonClick}>
      Поиск
    </Button>
  );
  const searchIcon = <SearchIcon />;

  return (
    <StyledSearchInput
      icon={searchIcon}
      placeholder={placeholder ? placeholder : ''}
      size={SIZE.LG}
      rightSection={searchButton}
      value={value}
      onChange={onChange}
    />
  );
};
