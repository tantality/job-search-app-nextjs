import { useQuery, UseQueryResult } from '@tanstack/react-query';
import superJob from '@/services/super-job/super-job-api';
import { VacancyList } from '@/types/super-job/vacancies';
import { VacancyFilterType } from '@/contexts/vacancy-filter/context';

export const useVacanciesByFilter = (page: number, itemsCount: number, filter: VacancyFilterType): UseQueryResult<VacancyList> => {
  const { paymentFrom, paymentTo, keyword, industryId } = filter;

  const data = useQuery({
    queryKey: ['vacancies', page, itemsCount, paymentFrom, paymentTo, keyword, industryId],
    queryFn: () => superJob.getVacanciesByFilter(page, itemsCount, filter),
    staleTime: Infinity,
    keepPreviousData: true,
  });

  return data;
};
