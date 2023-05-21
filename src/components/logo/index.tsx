import { FC } from 'react';
import LogotypeSvg from '../../../public/logo.svg';
import { StyledLogo, StyledLogoText } from './styled';

export const Logo: FC = () => {
  return (
    <StyledLogo>
      <LogotypeSvg />
      <StyledLogoText>Jobored</StyledLogoText>
    </StyledLogo>
  );
};
