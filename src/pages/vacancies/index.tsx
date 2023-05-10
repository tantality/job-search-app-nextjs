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
import { StyledMainContent } from './styled';

export default function VacanciesPage() {
  const { vacancyFilter } = useContext(VacancyFilterContext) as VacancyFilterContextType;

  const [page, setPage] = useState<number>(1);
  const { data: vacancyList, refetch } = useVacanciesByFilter(page, ITEMS_PER_PAGE, vacancyFilter);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div style={{ marginTop: '40px' }}>
      <TwoColumnLayout>
        <Sidebar>
          <VacancyFilter />
        </Sidebar>
        <div>
          <SearchInput placeholder="Введите название вакансии" />
          <StyledMainContent>
            {vacancyList && vacancyList.objects && <VacancyList vacancies={vacancyList.objects} />}
          </StyledMainContent>
        </div>
      </TwoColumnLayout>
    </div>
  );
}
