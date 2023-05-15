import { useContext, useState } from 'react';
import { Loader } from '@mantine/core';
import { useVacanciesByIds } from '@/hooks/useVacanciesByIds';
import { ITEMS_PER_PAGE } from '@/constants';
import { VacancyList } from '@/components/vacancy-list';
import { calculatePageCount } from '@/utils';
import { Pagination } from '@/components/pagination';
import { FavoriteVacanciesContext } from '@/contexts/favorite-vacancies/context';
import { FavoriteVacanciesState } from '@/contexts/favorite-vacancies/types';
import { Container } from '@/components/container';
import { StyledContainer } from './styled';

export default function FavoritesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { ids } = useContext(FavoriteVacanciesContext) as FavoriteVacanciesState;
  const [initialIds] = useState([...new Set(ids)]);

  const startInd = -ITEMS_PER_PAGE + currentPage * ITEMS_PER_PAGE;
  const endInd = startInd + ITEMS_PER_PAGE;
  const idsChunkToFetch = initialIds.filter((item, ind) => ind >= startInd && ind < endInd);

  const {
    data: vacancyList,
    isFetching,
    isSuccess,
  } = useVacanciesByIds(idsChunkToFetch, { enabled: Boolean(initialIds.length) });

  const noVacancies = !isFetching && (!vacancyList || !initialIds.length || !vacancyList.total);

  if (noVacancies) {
    return <div>Нет вакансий</div>;
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
