import { FC } from 'react';
import { NavItem } from '../nav-item';
import { StyledList, StyledNav } from './styled';

export const Nav: FC = () => {
  const MENU_ITEMS: NavItem[] = [
    { name: 'Поиск Вакансий', path: '/vacancies' },
    { name: 'Избранное', path: '/vacancies/favorites' },
  ];

  return (
    <StyledNav>
      <StyledList>
        {MENU_ITEMS.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </StyledList>
    </StyledNav>
  );
};
