import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import superJob from '@/services/super-job/super-job-api';
import { VacancyList } from '@/types/super-job/vacancies';

export const useVacanciesByIds = (ids: number[], options?: UseQueryOptions): UseQueryResult<VacancyList> => {
  const data = useQuery({
    queryKey: ['vacancyIds', ids],
    queryFn: () => superJob.getVacanciesByIds(ids),
    staleTime: Infinity,
    keepPreviousData: true,
    ...options,
  }) as UseQueryResult<VacancyList>;

  return data;
};
