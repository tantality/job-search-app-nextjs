import { FC } from 'react';
import { StyledNumberInput } from './styled';

interface NumberInputProps {
  placeholder?: string;
}

export const NumberInput: FC<NumberInputProps> = ({ placeholder }) => {
  return <StyledNumberInput placeholder={placeholder ? placeholder : ''} size={'md'} type="number" min={1} />;
};
