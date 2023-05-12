import { FAVORITE_VACANCIES_ACTION } from './constants';
import { AddToFavorites, DeleteFromFavorites } from './types';

export const addVacancyToFavoritesAction = (payload: number): AddToFavorites => ({
  type: FAVORITE_VACANCIES_ACTION.ADD_TO_FAVORITES,
  payload,
});

export const deleteVacancyFromFavoritesAction = (payload: number): DeleteFromFavorites => ({
  type: FAVORITE_VACANCIES_ACTION.DELETE_FROM_FAVORITES,
  payload,
});
