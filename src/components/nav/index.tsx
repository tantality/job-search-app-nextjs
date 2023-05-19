import { FC } from 'react';
import { NavItem } from '../nav-item';
import { StyledList, StyledNav } from './styled';

const MENU_ITEMS: NavItem[] = [
  { name: 'Поиск Вакансий', path: '/vacancies' },
  { name: 'Избранное', path: '/vacancies/favorites' },
];

export const Nav: FC = () => {
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
