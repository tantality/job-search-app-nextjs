import { Poppins } from 'next/font/google';
import styled from 'styled-components';
import Logo from '../../../public/logo.svg';

const poppins = Poppins({ subsets: ['latin'], weight: '600', style: 'normal' });

export const StyledLogo = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const StyledSvg = styled(Logo)`
  width: 30px;
  height: 30px;

  @media (max-width: 700px) {
    width: 27px;
    height: 27px;
  }
`;

export const StyledLogoText = styled.p`
  font-family: ${poppins.style.fontFamily};
  font-style: ${poppins.style.fontStyle};
  font-weight: ${poppins.style.fontWeight};
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #232134;

  @media (max-width: 700px) {
    font-size: 21px;
    line-height: 30px;
  }
`;
