import { VacancyFilterType } from '@/types';

interface FilterParams {
  payment_to?: number;
  payment_from?: number;
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
