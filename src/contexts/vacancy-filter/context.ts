import { createContext, Dispatch, SetStateAction } from 'react';

export interface VacancyFilterType {
  keyword: string;
  paymentFrom: number | '';
  paymentTo: number | '';
  industryId: number;
}

export interface VacancyFilterContextType {
  vacancyFilter: VacancyFilterType;
  setVacancyFilter: Dispatch<SetStateAction<VacancyFilterType>>;
}

export const VacancyFilterContext = createContext<VacancyFilterContextType | null>(null);
