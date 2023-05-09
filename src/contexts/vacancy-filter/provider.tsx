import { ReactNode, useState } from 'react';
import { VacancyFilterContext, VacancyFilter } from './context';
import { initialData } from './initial-data';

interface VacancyFilterProviderProps {
  children: ReactNode;
}

export function VacancyFilterProvider({ children }: VacancyFilterProviderProps) {
  const [vacancyFilter, setVacancyFilter] = useState<VacancyFilter>(initialData);
  const value = { vacancyFilter, setVacancyFilter };

  return <VacancyFilterContext.Provider value={value}>{children}</VacancyFilterContext.Provider>;
}
