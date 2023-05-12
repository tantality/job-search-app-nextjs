import { ReactNode, useReducer } from 'react';
import { FavoriteVacanciesContext, FavoriteVacanciesDispatchContext } from './context';
import { initialData } from './initial-data';

import { favoriteVacanciesReducer } from './reducer';

interface FavoriteVacanciesProviderProps {
  children: ReactNode;
}

export function FavoriteVacanciesProvider({ children }: FavoriteVacanciesProviderProps) {
  const [favoriteVacancies, dispatch] = useReducer(favoriteVacanciesReducer, initialData);

  return (
    <FavoriteVacanciesContext.Provider value={favoriteVacancies}>
      <FavoriteVacanciesDispatchContext.Provider value={dispatch}>{children}</FavoriteVacanciesDispatchContext.Provider>
    </FavoriteVacanciesContext.Provider>
  );
}
