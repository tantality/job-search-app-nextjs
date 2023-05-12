import { createContext, Dispatch } from 'react';
import { FavoriteVacanciesState, FavoriteVacancyAction } from './types';

export const FavoriteVacanciesContext = createContext<FavoriteVacanciesState | null>(null);
export const FavoriteVacanciesDispatchContext = createContext<Dispatch<FavoriteVacancyAction> | null>(null);
