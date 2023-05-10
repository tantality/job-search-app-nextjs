import { useQuery, UseQueryResult } from '@tanstack/react-query';
import superJob from '@/services/super-job/super-job-api';
import { VacancyList } from '@/types/super-job/vacancies';
import { VacancyFilter } from '@/contexts/vacancy-filter/context';

export const useVacanciesByFilter = (page: number, itemsCount: number, filter: VacancyFilter): UseQueryResult<VacancyList> => {
  const { paymentFrom, paymentTo, keyword, industryId } = filter;

  const data = useQuery({
    queryKey: ['vacancies', page, itemsCount, paymentFrom, paymentTo, keyword, industryId],
    queryFn: () => superJob.getVacanciesByFilter(page, itemsCount, filter),
  });

  return data;
};
