/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Link from 'next/link';
import styled, { LightTheme, ThemedStyledProps } from 'styled-components';

export const StyledNavItem = styled.li`
  height: 100%;
  display: block;
`;

interface StyledLinkProps {
  $isActive: boolean;
}

export type MyThemeProps<P> = ThemedStyledProps<P, LightTheme>;

export const StyledLink = styled(Link)<StyledLinkProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #232134;

  display: flex;
  align-items: center;
  height: 100%;
  padding: 8px 4px;

  ${({ $isActive }) =>
    $isActive &&
    `
       font-weight: 500;
       color:#5E96FC;
    `}

  @media(max-width:700px) {
    font-size: 15px;
  }
`;
