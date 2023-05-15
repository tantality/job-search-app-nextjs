import { FC, MouseEvent, ReactNode } from 'react';
import CrossIcon from '../../../public/assets/icons/cross.svg';
import { StyledResetButton } from './styled';

export interface ResetButtonProps {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ResetButton: FC<ResetButtonProps> = (props) => {
  return <StyledResetButton {...props} compact rightIcon={<CrossIcon />} />;
};
