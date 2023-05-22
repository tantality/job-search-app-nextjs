import { FC } from 'react';
import { SIZE } from '@/constants';
import { StyledNumberInput } from './styled';

interface NumberInputProps {
  placeholder?: string;
  value: number | '';
  onChange: (value: number | '') => void;
}

const DEFAULT_MAX_DELAY_IN_MS = 25;

export const NumberInput: FC<NumberInputProps> = ({ placeholder, ...props }) => {
  const calculateDelay = (stepCount: number): number => {
    const delay = 1000 / stepCount ** 2;
    return Math.max(delay, DEFAULT_MAX_DELAY_IN_MS);
  };

  return (
    <StyledNumberInput
      placeholder={placeholder ?? ''}
      size={SIZE.MD}
      type="number"
      min={0}
      startValue={500}
      stepHoldDelay={500}
      step={500}
      stepHoldInterval={(stepCount): number => calculateDelay(stepCount)}
      {...props}
    />
  );
};
