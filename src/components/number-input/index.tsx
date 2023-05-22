import { FC } from 'react';
import { SIZE } from '@/constants';
import { StyledNumberInput } from './styled';

interface NumberInputProps {
  placeholder?: string;
  value: number | '';
  onChange: (value: number | '') => void;
}

export const NumberInput: FC<NumberInputProps> = ({ placeholder, ...props }) => {
  return <StyledNumberInput placeholder={placeholder ?? ''} size={SIZE.MD} type="number" min={1} {...props} />;
};
