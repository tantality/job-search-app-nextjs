import { FC } from 'react';
import { StyledLogo, StyledLogoText, StyledSvg } from './styled';

export const Logo: FC = () => {
  return (
    <StyledLogo>
      <StyledSvg />
      <StyledLogoText>Jobored</StyledLogoText>
    </StyledLogo>
  );
};
