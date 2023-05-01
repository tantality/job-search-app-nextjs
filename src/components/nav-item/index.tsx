import { useRouter } from 'next/router';
import { FC } from 'react';
import { StyledNavItem, StyledLink } from './styled';

export interface NavItem {
  name: string;
  path: string;
}

interface NavItemProps {
  item: NavItem;
}

export const NavItem: FC<NavItemProps> = ({ item }) => {
  const { pathname } = useRouter();
  const isActive = pathname === item.path ? true : false;

  return (
    <StyledNavItem>
      <StyledLink href={{ pathname: item.path }} $isActive={isActive}>
        {item.name}
      </StyledLink>
    </StyledNavItem>
  );
};
