import { LOCAL_STORAGE_KEY } from '@/constants';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/utils/local-storage-functions';
import { FAVORITE_VACANCIES_ACTION } from './constants';
import { FavoriteVacanciesState, FavoriteVacancyAction } from './types';

export function favoriteVacanciesReducer(state: FavoriteVacanciesState, action: FavoriteVacancyAction): FavoriteVacanciesState {
  const favoriteVacancyIds: Array<number> = JSON.parse(getItemFromLocalStorage(LOCAL_STORAGE_KEY.FAVORITE_VACANCY_IDS) ?? '[]');

  switch (action.type) {
  case FAVORITE_VACANCIES_ACTION.ADD_TO_FAVORITES: {
    setItemToLocalStorage(LOCAL_STORAGE_KEY.FAVORITE_VACANCY_IDS, JSON.stringify([...favoriteVacancyIds, action.payload]));
    return { ids: [...state.ids, action.payload] };
  }
  case FAVORITE_VACANCIES_ACTION.DELETE_FROM_FAVORITES: {
    const actualFavoriteVacancyIds = favoriteVacancyIds.filter((id) => id !== action.payload);
    setItemToLocalStorage(LOCAL_STORAGE_KEY.FAVORITE_VACANCY_IDS, JSON.stringify(actualFavoriteVacancyIds));
    return { ids: actualFavoriteVacancyIds };
  }

  default: {
    return state;
  }
  }
}
