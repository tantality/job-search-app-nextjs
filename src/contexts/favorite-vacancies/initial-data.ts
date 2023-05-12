import { LOCAL_STORAGE_KEY } from '@/constants';
import { getItemFromLocalStorage } from '@/utils';
import { FavoriteVacanciesState } from './types';

const IS_SERVER = typeof window === 'undefined';

export const initialData: FavoriteVacanciesState = {
  ids: !IS_SERVER ? JSON.parse(getItemFromLocalStorage(LOCAL_STORAGE_KEY.FAVORITE_VACANCY_IDS) ?? '[]') : [],
};
