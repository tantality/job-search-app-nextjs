import { ChangeEvent, MouseEvent, useContext, useEffect, useState } from 'react';
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
import { calculatePageAmount } from '@/utils/calculate-page-amount';
import { StyledMainContent } from './styled';

export default function VacanciesPage() {
  const { vacancyFilter, setVacancyFilter } = useContext(VacancyFilterContext) as VacancyFilterContextType;

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

  const handleSubmitButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setPage(1);
  };

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value;
    setVacancyFilter((prev) => ({ ...prev, keyword: value }));
  };

  const noVacancies = !isFetching && (!vacancyList || !vacancyList.objects.length);

  if (noVacancies) {
    return <div>Нет вакансий</div>;
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <TwoColumnLayout>
        <Sidebar>
          <VacancyFilter onSubmit={setPage} />
        </Sidebar>
        <div>
          <SearchInput
            placeholder="Введите название вакансии"
            value={vacancyFilter.keyword}
            onSubmitButtonClick={handleSubmitButtonClick}
            onChange={handleSearchInputChange}
          />
          <StyledMainContent>
            {vacancyList && vacancyList.objects && !isFetching ? <VacancyList vacancies={vacancyList.objects} /> : <Loader />}
            {vacancyList && <Pagination total={calculatePageAmount(vacancyList.total, ITEMS_PER_PAGE)} value={page} onChange={setPage} />}
          </StyledMainContent>
        </div>
      </TwoColumnLayout>
    </div>
  );
}
