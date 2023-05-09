import { FC } from 'react';
import { SIZE } from '@/constants';
import { StyledNumberInput } from './styled';

interface NumberInputProps {
  placeholder?: string;
  onChange: (value: number | '') => void;
}

export const NumberInput: FC<NumberInputProps> = ({ placeholder, onChange }) => {
  return <StyledNumberInput placeholder={placeholder ? placeholder : ''} size={SIZE.MD} type="number" min={1} onChange={onChange} />;
};
