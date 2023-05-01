import { FC } from 'react';
import { Logo } from '../logo';
import { Nav } from '../nav';
import { StyledContainer, StyledHeader, StyledWrapper } from './styled';

export const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <Logo />
          <Nav />
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};
