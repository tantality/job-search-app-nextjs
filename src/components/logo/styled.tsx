import { Poppins } from 'next/font/google';
import Image from 'next/image';
import styled from 'styled-components';

const poppins = Poppins({ subsets: ['latin'], weight: '600', style: 'normal' });

export const StyledLogo = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const StyledImage = styled(Image)``;

export const StyledLogoText = styled.p`
  font-family: ${poppins.style.fontFamily};
  font-style: ${poppins.style.fontStyle};
  font-weight: ${poppins.style.fontWeight};
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #232134;
`;
