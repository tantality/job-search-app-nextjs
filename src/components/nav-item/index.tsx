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
  const router = useRouter();
  let isActive;

  if (item.path === '/vacancies' && router.pathname === '/vacancies/[id]') {
    isActive = true;
  } else {
    isActive = router.pathname === item.path;
  }

  return (
    <StyledNavItem>
      <StyledLink href={{ pathname: item.path }} $isActive={isActive}>
        {item.name}
      </StyledLink>
    </StyledNavItem>
  );
};
