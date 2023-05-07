import { useQuery, UseQueryResult } from '@tanstack/react-query';
import superJob from '@/services/super-job/super-job-api';
import { VacancyList } from '@/types/super-job/vacancies';

export const useVacancies = (page: number, itemsCount: number): UseQueryResult<VacancyList> => {
  const data = useQuery({ queryKey: ['vacancies', page, itemsCount], queryFn: () => superJob.getVacancies(page, itemsCount) });
  return data;
};
