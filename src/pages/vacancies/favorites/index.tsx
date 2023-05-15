import { useContext, useState } from 'react';
import { Loader } from '@mantine/core';
import { useVacanciesByIds } from '@/hooks/useVacanciesByIds';
import { ITEMS_PER_PAGE } from '@/constants';
import { VacancyList } from '@/components/vacancy-list';
import { calculatePageCount, getDataChunk } from '@/utils';
import { Pagination } from '@/components/pagination';
import { FavoriteVacanciesContext } from '@/contexts/favorite-vacancies/context';
import { FavoriteVacanciesState } from '@/contexts/favorite-vacancies/types';
import { Container } from '@/components/container';
import { NoVacanciesScreen } from '@/components/no-vacancies-screen';
import { StyledContainer } from './styled';

export default function FavoritesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { ids } = useContext(FavoriteVacanciesContext) as FavoriteVacanciesState;
  const [initialIds] = useState([...new Set(ids)]);

  const idsChunkToFetch = getDataChunk(initialIds, ITEMS_PER_PAGE, currentPage);
  const options = { enabled: Boolean(initialIds.length) };
  const { data: vacancyList, isFetching, isSuccess } = useVacanciesByIds(idsChunkToFetch, options);

  const noVacancies = !isFetching && (!vacancyList || !initialIds.length || !vacancyList.total);
  if (noVacancies) {
    return <NoVacanciesScreen />;
  }

  const pageCount = calculatePageCount(initialIds.length, ITEMS_PER_PAGE);

  return (
    <Container maxWidth={773}>
      <main>
        <StyledContainer>
          {isSuccess && !isFetching ? <VacancyList vacancies={vacancyList.objects} /> : <Loader />}
          {isSuccess && pageCount > 1 && <Pagination total={pageCount} value={currentPage} onChange={setCurrentPage} />}
        </StyledContainer>
      </main>
    </Container>
  );
}
