import { createContext, Dispatch, SetStateAction } from 'react';

export interface VacancyFilter {
  keyword: string;
  paymentFrom: number | '';
  paymentTo: number | '';
  industryId: number;
}

export interface VacancyFilterContextType {
  vacancyFilter: VacancyFilter;
  setVacancyFilter: Dispatch<SetStateAction<VacancyFilter>>;
}

export const VacancyFilterContext = createContext<VacancyFilterContextType | null>(null);
