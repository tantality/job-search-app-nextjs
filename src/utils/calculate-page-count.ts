import { MAX_VACANCY_COUNT } from '@/constants';

export const calculatePageCount = (totalItemCount: number, itemsPerPage: number): number => {
  if (totalItemCount <= itemsPerPage) {
    return 1;
  }

  const pageAmount = Math.ceil(totalItemCount / itemsPerPage);
  const maxPageAmount = Math.ceil(MAX_VACANCY_COUNT / itemsPerPage);

  if (pageAmount >= maxPageAmount) {
    return maxPageAmount;
  }

  return pageAmount;
};
