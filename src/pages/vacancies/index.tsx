import { ChangeEvent, MouseEvent, useState } from 'react';
import { Loader } from '@mantine/core';
import { TwoColumnLayout } from '@/components/layouts/two-column-layout';
import { Sidebar } from '@/components/sidebar';
import { SearchInput } from '@/components/search-input';
import { VacancyList } from '@/components/vacancy-list';
import { VacancyFilter } from '@/components/vacancy-filter';
import { ITEMS_PER_PAGE, VACANCY_FILTER_INITIAL_DATA as INITIAL_DATA } from '@/constants';
import { useVacanciesByFilter } from '@/hooks/useVacanciesByFilter';
import { Pagination } from '@/components/pagination';
import { calculatePageCount } from '@/utils/calculate-page-count';
import { Container } from '@/components/container';
import { NoVacanciesScreen } from '@/components/no-vacancies-screen';
import { StyledMainContent } from '@/styles/pages/vacancies/index-styled';
import { ErrorScreen } from '@/components/error-screen';
import { VacancyFilterType } from '@/types';

export default function VacanciesPage() {
  const [localVacancyFilter, setLocalVacancyFilter] = useState<VacancyFilterType>(INITIAL_DATA);
  const [vacancyFilterToFetch, setVacancyFilterToFetch] = useState<VacancyFilterType>(INITIAL_DATA);
  const [page, setPage] = useState<number>(1);

  const { data: vacancyList, isFetching, isError, isSuccess } = useVacanciesByFilter(page, ITEMS_PER_PAGE, vacancyFilterToFetch);

  function resetFiltersToInitialData(): void {
    setVacancyFilterToFetch(INITIAL_DATA);
    setLocalVacancyFilter(INITIAL_DATA);
  }

  const handleSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setPage(1);
    setVacancyFilterToFetch(localVacancyFilter);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setLocalVacancyFilter((prev) => ({ ...prev, keyword: value }));
  };

  if (isError) {
    return <ErrorScreen />;
  }

  const noVacancies = !isFetching && (!vacancyList || !vacancyList.objects.length);
  if (noVacancies) {
    return <NoVacanciesScreen onButtonClick={resetFiltersToInitialData} />;
  }

  const pageCount = isSuccess ? calculatePageCount(vacancyList.total, ITEMS_PER_PAGE) : 0;

  return (
    <Container>
      <TwoColumnLayout>
        <Sidebar>
          <VacancyFilter
            setPage={setPage}
            localVacancyFilter={localVacancyFilter}
            setLocalVacancyFilter={setLocalVacancyFilter}
            setVacancyFilterToFetch={setVacancyFilterToFetch}
          />
        </Sidebar>
        <div>
          <SearchInput
            placeholder="Введите название вакансии"
            value={localVacancyFilter.keyword}
            onSubmitButtonClick={handleSubmitButtonClick}
            onChange={handleSearchInputChange}
          />
          <StyledMainContent>
            {isSuccess && !isFetching ? <VacancyList vacancies={vacancyList.objects} /> : <Loader />}
            {isSuccess && pageCount > 1 && <Pagination total={pageCount} value={page} onChange={setPage} />}
          </StyledMainContent>
        </div>
      </TwoColumnLayout>
    </Container>
  );
}
