import { FC, ReactNode } from 'react';
import { StyledTwoColumnLayout } from './styled';

interface TwoColumnLayoutProps {
  children: ReactNode[];
}

export const TwoColumnLayout: FC<TwoColumnLayoutProps> = ({ children }) => {
  return <StyledTwoColumnLayout>{children}</StyledTwoColumnLayout>;
};
