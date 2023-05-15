import { FC, ReactNode } from 'react';
import { Header } from '@/components/header';
import { StyledApp, StyledContent } from './styled';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <StyledApp>
      <Header />
      <StyledContent>{children}</StyledContent>
    </StyledApp>
  );
};
