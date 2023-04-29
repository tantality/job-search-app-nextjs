import Image from 'next/image';
import styled from 'styled-components';

export const StyledLogo = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const StyledImage = styled(Image)``;

export const StyledLogoText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #232134;
`;
