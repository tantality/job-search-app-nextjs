import { FC } from 'react';
import logo from '../../../public/logo.svg';
import { StyledLogo, StyledLogoText, StyledImage } from './styled';

export const Logo: FC = () => {
  return (
    <StyledLogo>
      <StyledImage src={logo} alt="logo" />
      <StyledLogoText>Jobored</StyledLogoText>
    </StyledLogo>
  );
};

