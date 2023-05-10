import { useContext, useEffect, useState } from 'react';
import { Loader } from '@mantine/core';
import { TwoColumnLayout } from '@/components/layouts/two-column-layout';
import { Sidebar } from '@/components/sidebar';
import { SearchInput } from '@/components/search-input';
import { VacancyList } from '@/components/vacancy-list';
import { VacancyFilterContext, VacancyFilterContextType } from '@/contexts/vacancy-filter/context';
import { VacancyFilter } from '@/components/vacancy-filter';
import { ITEMS_PER_PAGE } from '@/constants';
import { useVacanciesByFilter } from '@/hooks/useVacanciesByFilter';
import { Pagination } from '@/components/pagination';
import { StyledMainContent } from './styled';

export default function VacanciesPage() {
  const { vacancyFilter } = useContext(VacancyFilterContext) as VacancyFilterContextType;

  const [page, setPage] = useState<number>(1);
  const { data: vacancyList, refetch, isFetching, isPreviousData } = useVacanciesByFilter(page, ITEMS_PER_PAGE, vacancyFilter);

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (isPreviousData) {
      refetch();
    }
  }, [page]);

  return (
    <div style={{ marginTop: '40px' }}>
      <TwoColumnLayout>
        <Sidebar>
          <VacancyFilter />
        </Sidebar>
        <div>
          <SearchInput placeholder="Введите название вакансии" />
          <StyledMainContent>
            {vacancyList && vacancyList.objects && !isFetching ? <VacancyList vacancies={vacancyList.objects} /> : <Loader />}
            <Pagination total={5} value={page} onChange={setPage} />
          </StyledMainContent>
        </div>
      </TwoColumnLayout>
    </div>
  );
}
