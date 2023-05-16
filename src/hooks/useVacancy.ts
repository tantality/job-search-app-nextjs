import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import superJob from '@/services/super-job/super-job-api';
import { Vacancy } from '@/types/super-job/vacancies';

export const useVacancy = (id: number, options?: UseQueryOptions): UseQueryResult<Vacancy> => {
  const data = useQuery({
    queryKey: ['vacancy', id],
    queryFn: () => superJob.getVacancy(id),
    staleTime: Infinity,
    keepPreviousData: true,
    ...options,
  }) as UseQueryResult<Vacancy>;

  return data;
};
