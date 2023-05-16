import { FC } from 'react';
import { Vacancy } from '@/types/super-job/vacancies';
import { SIZE } from '@/constants';
import { VacancyCard } from '../vacancy-card';
import { StyledVacancyList } from './styled';

export interface VacancyListProps {
  vacancies: Vacancy[];
}

export const VacancyList: FC<VacancyListProps> = ({ vacancies }) => {
  return (
    <StyledVacancyList>
      {vacancies &&
        vacancies.map((vacancy) => {
          return (
            <li key={vacancy.id}>
              <VacancyCard vacancy={vacancy} size={SIZE.MD} headingProperties={{ weight: 600 }} isHeadingLink={true} />
            </li>
          );
        })}
    </StyledVacancyList>
  );
};
