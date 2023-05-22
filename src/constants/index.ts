import { VacancyFilterType } from '@/types';

export enum SIZE {
  XS = 'xs',
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
  XL = 'xl',
  XXL = 'xxl',
}

export enum HEADING_ORDER {
  H1 = 1,
  H2 = 2,
  H3 = 3,
  H4 = 4,
  H5 = 5,
  H6 = 6,
}

export const MAX_VACANCY_COUNT = 500;
export const ITEMS_PER_PAGE = 4;

export enum LOCAL_STORAGE_KEY {
  FAVORITE_VACANCY_IDS = 'favorite-vacancy-ids',
  ACCESS_TOKEN = 'access-token',
  REFRESH_TOKEN = 'refresh-token',
}

export const VACANCY_FILTER_INITIAL_DATA: VacancyFilterType = { keyword: '', paymentFrom: '', paymentTo: '', industryId: 0 };
