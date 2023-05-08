import { FC, ReactNode } from 'react';
import { StyledContainer, StyledSidebar } from './styled';

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <StyledSidebar>
      <StyledContainer>{children}</StyledContainer>
    </StyledSidebar>
  );
};
