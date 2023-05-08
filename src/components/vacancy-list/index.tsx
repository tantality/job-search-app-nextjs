import { FC } from 'react';
import { Vacancy } from '@/mocks/vacancies';
import { SIZE } from '@/constants';
import { VacancyCard } from '../vacancy-card';
import { StyledVacancyList } from './styled';

export interface VacancyListProps {
  vacancies: Vacancy[];
}

export const VacancyList: FC<VacancyListProps> = ({ vacancies }) => {
  return (
    <StyledVacancyList>
      {vacancies.map((vacancy) => {
        return (
          <li key={vacancy.id}>
            <VacancyCard vacancy={vacancy} size={SIZE.MD} headingProperties={{ weight: 600, color: '#5E96FC' }} />
          </li>
        );
      })}
    </StyledVacancyList>
  );
};
