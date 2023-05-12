import { FAVORITE_VACANCIES_ACTION } from './constants';

export type FavoriteVacancyAction = AddToFavorites | DeleteFromFavorites;

export interface AddToFavorites {
  type: FAVORITE_VACANCIES_ACTION.ADD_TO_FAVORITES;
  payload: number;
}

export interface DeleteFromFavorites {
  type: FAVORITE_VACANCIES_ACTION.DELETE_FROM_FAVORITES;
  payload: number;
}

export interface FavoriteVacanciesState {
  ids: number[];
}
