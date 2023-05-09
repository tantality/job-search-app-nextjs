import { FC, ReactNode } from 'react';
import { Header } from '@/components/header';
import { Container } from '@/components/container';
import { StyledApp, StyledContent } from './styled';

interface PageLayoutProps {
  children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ children }) => {
  return (
    <StyledApp>
      <Header />
      <StyledContent>
        <Container>{children}</Container>
      </StyledContent>
    </StyledApp>
  );
};
