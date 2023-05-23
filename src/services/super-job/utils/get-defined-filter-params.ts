import { VacancyFilterType } from '@/types';

interface FilterParams {
  payment_to?: string;
  payment_from?: string;
  keyword?: string;
  catalogues?: number;
}

export const getDefinedFilterParams = (filter: VacancyFilterType): FilterParams => {
  const { paymentFrom, paymentTo, keyword, industryId } = filter;

  const definedFilterParams = {
    ...(paymentFrom !== '' && { payment_from: paymentFrom }),
    ...(paymentTo !== '' && { payment_to: paymentTo }),
    ...(keyword.trim() && { keyword }),
    ...(industryId && { catalogues: industryId }),
  } as FilterParams;

  return definedFilterParams;
};
