import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import { Loader } from '@mantine/core';
import { TwoColumnLayout } from '@/components/layouts/two-column-layout';
import { Sidebar } from '@/components/sidebar';
import { SearchInput } from '@/components/search-input';
import { VacancyList } from '@/components/vacancy-list';
import { VacancyFilterContext, VacancyFilterContextType, VacancyFilterType } from '@/contexts/vacancy-filter/context';
import { VacancyFilter } from '@/components/vacancy-filter';
import { ITEMS_PER_PAGE } from '@/constants';
import { useVacanciesByFilter } from '@/hooks/useVacanciesByFilter';
import { Pagination } from '@/components/pagination';
import { calculatePageCount } from '@/utils/calculate-page-count';
import { initialData } from '@/contexts/vacancy-filter/initial-data';
import { Container } from '@/components/container';
import { NoVacanciesScreen } from '@/components/no-vacancies-screen';
import { StyledMainContent } from '@/styles/pages/vacancies/index-styled';
import { ErrorScreen } from '@/components/error-screen';

export default function VacanciesPage() {
  const { vacancyFilter, setVacancyFilter } = useContext(VacancyFilterContext) as VacancyFilterContextType;
  const [localVacancyFilter, setLocalVacancyFilter] = useState<VacancyFilterType>(initialData);
  const [page, setPage] = useState<number>(1);
  const { data: vacancyList, isFetching, isError } = useVacanciesByFilter(page, ITEMS_PER_PAGE, vacancyFilter);

  function resetFiltersToInitialData(): void {
    setVacancyFilter(initialData);
    setLocalVacancyFilter(initialData);
  }

  const handleSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setPage(1);
    setVacancyFilter(localVacancyFilter);
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

  return (
    <Container>
      <TwoColumnLayout>
        <Sidebar>
          <VacancyFilter setPage={setPage} localVacancyFilter={localVacancyFilter} setLocalVacancyFilter={setLocalVacancyFilter} />
        </Sidebar>
        <div>
          <SearchInput
            placeholder="Введите название вакансии"
            value={localVacancyFilter.keyword}
            onSubmitButtonClick={handleSubmitButtonClick}
            onChange={handleSearchInputChange}
          />
          <StyledMainContent>
            {vacancyList && vacancyList.objects && !isFetching ? <VacancyList vacancies={vacancyList.objects} /> : <Loader />}
            {vacancyList && <Pagination total={calculatePageCount(vacancyList.total, ITEMS_PER_PAGE)} value={page} onChange={setPage} />}
          </StyledMainContent>
        </div>
      </TwoColumnLayout>
    </Container>
  );
}
