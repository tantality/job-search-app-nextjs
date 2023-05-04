import { FC } from 'react';
import { MANTINE_SIZES } from '@mantine/core';
import Image from 'next/image';
import { Button } from '../button';
import SearchIcon from '../../../public/assets/icons/search.svg';
import { StyledSearchInput } from './styled';

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ placeholder }) => {
  const searchButton = <Button size={MANTINE_SIZES[1]}>Поиск</Button>;
  const searchIcon = <Image src={SearchIcon} alt="search-icon" />;

  return (
    <StyledSearchInput icon={searchIcon} placeholder={placeholder ? placeholder : ''} size={MANTINE_SIZES[3]} rightSection={searchButton} />
  );
};
